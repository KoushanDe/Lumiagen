import { GoogleGenAI, Type } from "@google/genai";
import { AuditResult } from "../types";

// Initialize the Gemini AI client using process.env.API_KEY as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBusinessAudit = async (
  industry: string,
  bottleneck: string
): Promise<AuditResult> => {

  const model = "gemini-2.5-flash";
  const prompt = `
    I am a business owner in the ${industry} industry.
    My current biggest operational bottleneck is: ${bottleneck}.
    
    Please propose a specific AI or Automation software solution that my agency (Lumiagen) could build for them.
    Focus on high impact, technical feasibility, and value.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction: "You are a senior solutions architect at Lumiagen, a premier AI agency. Provide a detailed, professional, and high-value technical recommendation. The summary should be comprehensive (4-5 sentences) explaining exactly how the solution works. The key benefits should be specific and measurable.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A catchy name for the proposed solution" },
            summary: { type: Type.STRING, description: "A detailed description of the solution and workflow." },
            keyBenefits: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3-4 distinct benefits (bullet points)"
            },
            estimatedImpact: { type: Type.STRING, description: "Projected ROI or time saved (e.g., 'Reduces processing time by 40%')" }
          },
          required: ["title", "summary", "keyBenefits", "estimatedImpact"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response generated.");
    }

    const result = JSON.parse(text) as AuditResult;
    return result;

  } catch (error) {
    console.error("Error generating business audit:", error);
    throw error;
  }
};