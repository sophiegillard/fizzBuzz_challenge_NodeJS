// En dev, le proxy Vite redirige /api vers l'API. En prod, utiliser VITE_API_URL.
const API_BASE = import.meta.env.VITE_API_URL || "";

export const getApiUrl = (path: string) => {
    const base = API_BASE.replace(/\/$/, "");
    const p = path.startsWith("/") ? path : `/${path}`;
    return base ? `${base}${p}` : p;
};
