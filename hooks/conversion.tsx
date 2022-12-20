
export function convertFromMicroDenom(denom: string) {
    return denom?.slice(1, 2).toLowerCase() + denom?.substring(2).toUpperCase();
  }

export const formatWalletAddress = (address: string) => {
  return `${address.slice(0, address.indexOf("1"))}...${address.slice(-6)}`;
 };