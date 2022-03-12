import { Comparavel } from "./Comparavel.js";
import { Imprimivel } from "./Imprimivel.js";

export interface Modelavel<T> extends Comparavel<T>, Imprimivel {}
