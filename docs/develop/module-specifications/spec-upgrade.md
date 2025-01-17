# Upgrade

:::{Important}
Terra's upgrade module inherits from the Cosmos SDK's [`upgrade`](https://docs.cosmos.network/master/modules/upgrade/) module. This document is a stub and covers mainly important Terra-specific notes about how it is used.
:::

The upgrade module allows live chains to be upgraded with breaking changes smoothly. 

## State

The x/upgrade module is relatively straightforward. 

The state contains the currently active upgrade Plan (if one exists) by key 0x0 and if a Plan is marked as "done" by key 0x1. 

The state contains the consensus versions of all app modules in the application. 

The versions are stored as big endian uint64, and can be accessed with prefix 0x2 appended by the corresponding module name of type string. 

The state maintains a Protocol Version which can be accessed by key 0x3.

Plan: 0x0 -> Plan
Done: 0x1 | byte(plan name) -> BigEndian(Block Height)
ConsensusVersion: 0x2 | byte(module name) -> BigEndian(Module Consensus Version)
ProtocolVersion: 0x3 -> BigEndian(Protocol Version)