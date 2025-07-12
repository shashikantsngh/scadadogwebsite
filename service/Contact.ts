
export interface ContactFormPayload {
  name: string
  email: string
  company: string
  phone: string
  message: string
}



export class ContactService {
  static async sendEmail(payload: ContactFormPayload): Promise<{ success: boolean; message?: string }> {
    try {
      const res = await fetch("https://8hr02427-3000.inc1.devtunnels.ms/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const error = await res.json()
        throw new Error(`Failed to send email: ${error.detail || "Unknown error"}`)
      }

      const data = await res.json()
      return { success: true, message: data.message || "Email successfully" }
    } catch (error: any) {
      console.error("Error in sendEmail:", error)
      return { success: false, message: error.message || "Something went wrong" }
    }
  }
}
