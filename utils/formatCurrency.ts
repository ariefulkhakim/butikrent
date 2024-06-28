export function formatRupiah(amount: number, prefix: string = "Rp"): string {
  // Convert number to string and split the decimal part
  let numberString = amount.toString().replace(/[^,\d]/g, "");
  let split = numberString.split(",");
  let remainder = split[0].length % 3;
  let rupiah = split[0].substr(0, remainder);
  let thousands = split[0].substr(remainder).match(/\d{3}/gi);

  // Add a dot every three digits
  if (thousands) {
    let separator = remainder ? "." : "";
    rupiah += separator + thousands.join(".");
  }

  // Combine the formatted number with the decimal part if it exists
  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;

  // Add the prefix (Rp) to the formatted number
  return prefix + " " + rupiah;
}
