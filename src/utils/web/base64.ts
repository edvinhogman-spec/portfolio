export function encodeB64(value: string) {
    return Buffer.from(value, "utf-8").toString("base64url")
}

export function decodeB64(value: string) {
    return Buffer.from(value, "base64url").toString("utf-8")
}
