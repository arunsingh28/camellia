import axios, { AxiosError, AxiosResponse } from "axios";

let PhoneId = process.env.WAPNID;
let AccessToken = process.env.WAPPTOKEN;
let BaseUrl = process.env.ENDPOINT! + process.env.VERSION!;

console.log(`${BaseUrl}/${PhoneId}/messages`);

class WastappApi {
  async sendBulkMessage(phones: string[], message: string): Promise<any> {
    try {
      const url = `${BaseUrl}/${PhoneId}/messages`;
      const request = phones.map(async (phone) => {
        await axios.post(
          url,
          {
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: phone,
            type: "text",
            text: { body: message },
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${AccessToken}`,
            },
          }
        );
      });
      const response = await Promise.all(request);
      return response.map((res) => res);
    } catch (error) {
      console.error(
        "Error sending bulk messages:",
        (error as AxiosError).response?.data || (error as Error).message
      );
      throw new Error("Failed to send bulk messages");
    }
  }

  async createTemplate(templateName: string, category: string, language: string, body: string){
    try {
        const url = `${BaseUrl}/${PhoneId}/message_templates`;
  
        const response = await axios.post(
          url,
          {
            name: templateName,
            category: category,
            language: language,
            components: [
              {
                type: "BODY",
                text: body,
              },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${AccessToken}`,
            },
          }
        );
  
        return response.data;
      } catch (error) {
        console.error("Error creating template:", (error as AxiosError).response?.data || (error as Error).message);
        throw new Error("Failed to create template");
      }
  }

  async getAllTemplates() {
    try {
      const url = `${BaseUrl}/${PhoneId}/message_templates`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching templates:", (error as AxiosError).response?.data || (error as Error).message);
      throw new Error("Failed to fetch templates");
    }
  }

}

export default new WastappApi();
