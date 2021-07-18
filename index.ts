/**
 * typeof
 * jsのtypeofとは別。型をキャプチャを取得する。
 */
// let myObject = { foo: "foo" };
// let anotherObject: typeof myObject;

/**
 * keyof
 * オブジェクトのkeyをunion typeで取得する。
 */
// type SomeType = {
//   foo: "FOO";
//   bar: "BAR";
//   baz: "BAZ";
// };
// let someKey: keyof SomeType;
// someKey = "foo";

/**
 * keyof typeof
 */
// const myObject = {
//   foo: "FOO",
//   bar: "BAR",
//   baz: "BAZ",
// };
// let myObjectKey: keyof typeof myObject;
// myObjectKey = "foo"; //ok
// myObjectKey = "foooaaa"; //error

/**
 * 型の絞り込み
 * ガード節、Type Guard
 */
// function getFormattedValue(value: number | null) {
//   if (value === null) return "-- pt";
//   return `${value.toFixed(1)} pt`;
// }
// console.log(getFormattedValue(1));
// console.log(getFormattedValue(null));

/**
 * ダウンキャスト
 * 抽象的な型（string）から詳細な型（string literal）を付与すること
 * 型に互換性があるときのみ可能。例）string型とstring literal型
 */
// const defaultTheme = {
//   backgroundColor: "orange", //string
//   color: "red", //string
// };
// // defaultTheme.backgroundColor = "blue"; //ok

// const defaultThemeFixed = {
//   backgroundColor: "orange" as "orange", //"orange"
//   color: "red" as const, //"red"
// };
// // defaultThemeFixed.backgroundColor = "blue"; //error

// const empty = {} as { value: "value" }; //オブジェクトの中身は空ではなくなる
// const empty2 = {} as { value: string }; //オブジェクトの中身は空

/**
 * インデックスシグネチャ
 */
// type User = {
//   name: string;
//   [k: string]: string | number; //nameのstringも指定しないと、nameがnumber型でないためnameでエラーが出る
// };

// type Answer = "mighty" | "lot" | "few" | "entirely";
// type User2 = {
//   name: string;
//   enquete: {
//     [k: string]: Answer | undefined;
//   };
// };

/**
 * typeof type guard
 */
// function reset(value: string | number | boolean) {
//   const v0 = value; // string | number | boolean
//   if (typeof value === "number") {
//     const v1 = value; //number
//     return 0;
//   }
//   const v2 = value; // string | boolean
//   if (typeof value === "string") {
//     const v3 = value; //string
//     return "";
//   }
//   const v4 = value; // boolean
//   return false;
// }

/**
 * ジェネリクス
 * <T = string>のように初期値設定もできる
 */
// type Box<T> = {
//   value: T;
// };
// const box0: Box = { value: "test" }; //error
// const box1: Box<string> = { value: "test" }; //ok
// const box2: Box<number> = { value: "test" }; //error
