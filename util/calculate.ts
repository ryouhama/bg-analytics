export const roundUpToNumber = (value: number) => {
  // 下位3桁を取得
  const lastThreeDigits = value % 100;

  // 繰り上げが必要な場合
  if (lastThreeDigits !== 0) {
    return value + (100 - lastThreeDigits);
  }
  return value;
};
