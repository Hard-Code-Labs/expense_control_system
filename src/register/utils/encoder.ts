import * as forge from 'node-forge';

export function encryptWithPublicKey(data: string): string {
  const publicKeyPem = process.env.NEXT_PUBLIC_ENCRYPTION_KEY
  const publicKey = forge.pki.publicKeyFromPem(publicKeyPem!);
  const bytes = forge.util.encodeUtf8(data);
  const encrypted = publicKey.encrypt(bytes, 'RSAES-PKCS1-V1_5', {});

  return forge.util.encode64(encrypted);
}

// Con algoritmo RSA/ECB/OAEPWithSHA-256AndMGF1Padding
// const encrypted = publicKey.encrypt(bytes, 'RSA-OAEP', {
  //     md: forge.md.sha256.create(),
  //     mgf1: {
  //       md: forge.md.sha1.create()
  //     }
  //   });
