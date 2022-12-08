/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, BaseWalletLocked, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type { ContractAbi, ContractAbiInterface } from "../ContractAbi";
const _abi = {
  types: [
    {
      typeId: 0,
      type: "u64",
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [],
      name: "counter",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "param",
          type: 0,
          typeArguments: null,
        },
      ],
      name: "increment",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
    },
  ],
  loggedTypes: [],
};

export class ContractAbi__factory {
  static readonly abi = _abi;
  static createInterface(): ContractAbiInterface {
    return new Interface(_abi) as unknown as ContractAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): ContractAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as ContractAbi;
  }
}
