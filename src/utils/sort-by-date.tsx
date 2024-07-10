export function SortByDate(arr: any) {
  arr.sort(function (a: any, b: any) {
    return Number(new Date(a.created_at)) - Number(new Date(b.created_at));
  });

  return arr;
}
