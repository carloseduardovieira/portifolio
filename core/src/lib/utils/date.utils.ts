export class DateUtils {
  static padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  static epochToDate(epoch: number): string {
    const formatDate = (date: Date) => {
      return (
        [
          DateUtils.padTo2Digits(date.getMonth() + 1),
          DateUtils.padTo2Digits(date.getDate()),
          date.getFullYear().toString().slice(-2),
        ].join('/') +
        ' ' +
        [
          DateUtils.padTo2Digits(date.getHours()),
          DateUtils.padTo2Digits(date.getMinutes()),
        ].join(':')
      );
    };

    return formatDate(new Date(epoch));
  }
}
