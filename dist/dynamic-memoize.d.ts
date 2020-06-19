import Functions from "./functions";
import { DynamicMemoizeContainer } from "./object/dynamic-memoize-container";
export default function DynamicMemoize<Fn extends Functions>(callable: Fn, compareArguments?: Functions<[Parameters<Fn>, Parameters<Fn>], boolean>): Fn & DynamicMemoizeContainer<Fn>;
