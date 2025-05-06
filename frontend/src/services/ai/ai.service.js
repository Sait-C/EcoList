import api from "@/api/api-v1-config";

export async function analyzeProductListAxios(payload) {
  const formData = new FormData();
  if (payload.file) {
    formData.append("file", payload.file);
  }
  // Add other fields to formData
  Object.keys(payload).forEach((key) => {
    if (key !== "file") {
      formData.append(key, payload[key]);
    }
  });

  return await api.post("ai/analyze-list", formData, {
    withCredentials: true,
    params: payload.language ? { lang: payload.language } : undefined
  });
}

export async function createInformationTreeAxios(payload) {
  return await api.post("ai/create-information-tree", payload, {
    withCredentials: true,
    params: payload.language ? { lang: payload.language } : undefined
  });
}