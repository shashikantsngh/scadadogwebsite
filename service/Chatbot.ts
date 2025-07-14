
export interface chatbotPayload {
  session_id: string,
  message: string
}

export interface ChatbotResponse {
  success: boolean;
  bot_response?: string; // For storing the chatbot's actual response message
}

export class ChatbotService {
  static async sendMessage(payload: chatbotPayload): Promise<ChatbotResponse> {
    try {
      const res = await fetch("https://8hr02427-3000.inc1.devtunnels.ms/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const error = await res.json()
        throw new Error(`Failed to send message: ${error.detail || "Unknown error"}`)
      }

      const data = await res.json()
      return { 
        success: true, 
        bot_response: data.bot_response || "Thank you for your message!"
      }
    } catch (error: any) {
      console.error("Error in sendMessage:", error)
      return { success: false, bot_response: error.message || "Something went wrong" }
    }
  }
}
