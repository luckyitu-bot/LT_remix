import { GoogleGenAI, Type } from "@google/genai";

// Initialize only if key exists to prevent immediate crash, handle error gracefully later
// const ai = new GoogleGenAI({ apiKey });

export interface StrategyResult {
  headline: string;
  subheadline: string;
  structure: string[];
  tips: string;
}

export const generateMarketingStrategy = async (businessDescription: string): Promise<string> => {
  const currentKey = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
  if (!currentKey) {
    throw new Error("API Key não configurada. A funcionalidade de IA está indisponível.");
  }
  const aiClient = new GoogleGenAI({ apiKey: currentKey });

  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      Atue como um estrategista sênior da LT Marketing.
      
      O usuário tem o seguinte negócio/desafio: "${businessDescription}".
      
      Gere uma resposta estruturada explicando **como a LT Marketing pode ajudar o negócio dele**, seguindo EXATAMENTE a estrutura abaixo. Não dê aulas de como fazer, mostre o que a LT fará por ele.
      
      Estrutura obrigatória:
      
      ### 1. Crescimento da base
      [Explique como a LT aumentará a base de leads qualificados para este nicho]
      
      ### 2. Análise do produto/serviço
      [Como a LT analisará e posicionará o produto no mercado]
      
      ### 3. Definição de público
      [Como a LT identificará e segmentará o cliente ideal (ICP)]
      
      ### 4. Estratégia de redes sociais
      [Como a LT usará o conteúdo para gerar autoridade e desejo]
      
      ### 5. Geração de tráfego
      [Estratégia de tráfego pago (Google/Meta/LinkedIn) específica para este caso]
      
      ### 6. Criação e otimização de Landing Pages
      [Foco em alta conversão e copy persuasiva]
      
      ### 7. Desenvolvimento de produto Low Ticket (se aplicável)
      [Estratégia de produto de entrada para pagar o tráfego, se fizer sentido para o nicho]
      
      ### 8. Estruturação de oferta High Ticket
      [Como maximizar o LTV e o lucro com ofertas premium]
      
      ### 9. Estratégia de remarketing
      [Como a LT recuperará vendas perdidas e aumentará a conversão]
      
      ### 10. Estrutura completa do funil de vendas
      [Resumo do ecossistema de vendas que será implementado]
      
      ---
      
      **Quer implantar esse método na sua empresa? Entre em contato com a LT Marketing e fale com nosso time.**
      
      Mantenha o tom profissional, direto e focado em resultados e implementação.
    `;

    const response = await aiClient.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Não foi possível gerar a estratégia no momento.";
  } catch (error) {
    console.error("Erro ao gerar estratégia:", error);
    return "Ocorreu um erro ao conectar com a inteligência artificial. Por favor, tente novamente mais tarde.";
  }
};

export interface BlogPostGenerationResult {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
}

export const generateBlogPost = async (topic: string): Promise<BlogPostGenerationResult> => {
  const currentKey = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
  if (!currentKey) {
    throw new Error("API Key não configurada. A funcionalidade de IA está indisponível.");
  }
  
  const aiClient = new GoogleGenAI({ apiKey: currentKey });

  try {
    const prompt = `
      Escreva um artigo de blog completo, profissional e otimizado para SEO sobre o seguinte tema: "${topic}".
      O artigo deve ser escrito em Português do Brasil (pt-BR).
      O conteúdo deve ser longo, detalhado e formatado em Markdown (com títulos H2, H3, listas, etc.).
      
      MUITO IMPORTANTE: 
      - Use quebras de linha duplas (\\n\\n) entre todos os parágrafos para que o texto fique bem espaçado e fácil de ler.
      - Não crie blocos de texto gigantes. Divida as ideias em parágrafos curtos e fluidos.
      
      Forneça também um título atraente, um slug amigável para URL (ex: como-fazer-isso) e um resumo (excerpt) de até 200 caracteres.
    `;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "Título atraente do artigo" },
            slug: { type: Type.STRING, description: "Slug amigável para URL (ex: meu-artigo-legal)" },
            excerpt: { type: Type.STRING, description: "Resumo curto do artigo (max 200 caracteres)" },
            content: { type: Type.STRING, description: "Conteúdo completo do artigo formatado em Markdown" }
          },
          required: ["title", "slug", "excerpt", "content"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Resposta vazia da IA");
    
    return JSON.parse(text) as BlogPostGenerationResult;
  } catch (error) {
    console.error("Erro ao gerar artigo:", error);
    throw new Error("Falha ao gerar o artigo com IA. Tente novamente.");
  }
};