import { auth } from './firebase';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

// This interface is for structured error logging, not for display to the user.
interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): string {
  const currentUser = auth.currentUser;
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path,
    authInfo: {
      userId: currentUser?.uid,
      email: currentUser?.email,
    }
  }
  
  console.error(`Error during ${operationType} on ${path}: ${errInfo.error}`);
  console.error('Firestore Error:', JSON.stringify(errInfo, null, 2));

  // Return a user-friendly message
  if (error instanceof Error && (error.message.toLowerCase().includes('permission-denied') || error.message.toLowerCase().includes('insufficient permissions'))) {
      return 'Permissão negada. Verifique se você tem o nível de acesso necessário para esta operação.';
  }

  return 'Ocorreu um erro inesperado. Tente novamente.';
}