export const baseLink = `
${
  process.env.NODE_ENV === "development"
    ? "https://api.getnumero.co/numsecsys"
    : "https://api.getnumero.co/numsecsys"
}`;