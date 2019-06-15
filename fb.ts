type True = "t"
type False = "f"
type Bool = True | False

type Not<B extends Bool> = B extends True ? False : True

type _0 =
  { fizz: True, fizz1: False, fizz2: False, 
    buzz: True, buzz1: False, buzz2: False, buzz3: False, buzz4: False }
type Suc<N extends Nat> =
  { fizz: N["fizz2"], fizz1: N["fizz"], fizz2: N["fizz1"],
    buzz: N["buzz4"], buzz1: N["buzz"], buzz2: N["buzz1"], buzz3: N["buzz2"], buzz4: N["buzz3"] }
type Nat = _0 | Suc_Nat
interface Suc_Nat extends Suc<Nat> {}

type _1 = Suc<_0>
type _2 = Suc<_1>
type _3 = Suc<_2>
type _4 = Suc<_3>
type _5 = Suc<_4>
type _6 = Suc<_5>
type _7 = Suc<_6>
type _8 = Suc<_7>
type _9 = Suc<_8>
type _10 = Suc<_9>
type _11 = Suc<_10>
type _12 = Suc<_11>
type _13 = Suc<_12>
type _14 = Suc<_13>
type _15 = Suc<_14>
type _16 = Suc<_15>

type FB<N extends Nat> =
  N["fizz"] extends True ?
  N["buzz"] extends True ? "FizzBuzz" : "Fizz" :
  N["buzz"] extends True ? "Buzz": ""

const _0: FB<_0> = "FizzBuzz";
const _1: FB<_1> = "";
const _2: FB<_2> = "";
const _3: FB<_3> = "Fizz";
const _4: FB<_4> = "";
const _5: FB<_5> = "Buzz";
const _6: FB<_6> = "Fizz";
const _7: FB<_7> = "";
const _8: FB<_8> = "";
const _9: FB<_9> = "Fizz";
const _10: FB<_10> = "Buzz";
const _11: FB<_11> = "";
const _12: FB<_12> = "Fizz";
const _13: FB<_13> = "";
const _14: FB<_14> = "";
const _15: FB<_15> = "FizzBuzz";
const _16: FB<_16> = "";
