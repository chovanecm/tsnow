# tsnow
TypeScript-based tools for ServiceNow. Closed alpha.

## Purpose
tsnow uses TypeScript to inspect and enable auto-completion for ServiceNow scripts.
It does so by providing TypeScript definition files for the ServiceNow server-side API
and combining them with definition files generated from database schema of your ServiceNow instance.

You don't longer need to remember field names of your tables or search in the official incomplete API documentation. *work in progress :-)*

![Preview](https://i.imgur.com/oeaDgVr.png)

## Instalation
### Requirements
- nodejs v12 or above
- your favorite code editor with a TypeScript plugin enabled
- a ServiceNow instance

### Instalation Steps
- clone this repository
- run:
```console
npm install && npm link
```
- switch to the root directory of your ServiceNow project (i.e. where you sync your scripts to)
- See the help and download the definitions you need. *Note:* The "instance" must not contain the full domain name, i.e. use just 
yourinstance, not yourinstance.service-now.com
- The first time you ask tsnow to generate definitions, it will download the whole database schema (without actual data) from your instance.
That can take some time. It will cache it for future calls.

```console
you@yourcomputer:~$ tsnow --help
Usage: tsnow [options] <instance> <tables...>

Build TypeScript definitions for the given instance in the current directory.
tables: specify one or more tables to add to the current project. Use exact_table_name or *contains_name or starts_with_name*
All parent and reference tables are included to encompass the transitive closure of references.

Options:
  -V, --version            output the version number
  -r|--reference-keys <n>  The number of dot-walks to support in addQuery. The more, the slower type checking.
                           (default: 1)
  -h, --help               output usage information
  ```

### Using it
The tool should create a new file `tsconfig.json` and a directory called `@types`.

Open your code editor with an enabled TypeScript plugin. The editor will run `tsc` (TypeScript compiler) in the background and starts
checking and auto-complete your code as you are typing.

## Good to Know
- TypeScript tries to infer correct types based on your code automatically, but it is not fully familiar with the way how ServiceNow
creates objects and injects global variables. Hence, it may report false-positive errors in certain cases.
- At the same time, when TypeScript is unable to determine the correct type, it will infer it as type `any` and will not run any type checks on it.
- The current TypeScript setting for the generate files is rather strict and is subject to further tuning

