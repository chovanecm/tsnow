# tsnow
TypeScript-based tools for ServiceNow. Alpha version.

## Purpose
tsnow uses TypeScript to inspect and enable auto-completion for ServiceNow scripts.
It does so by providing TypeScript definition files for the ServiceNow server-side API
and combining them with definition files generated from database schema of your ServiceNow instance.

You don't longer need to remember field names of your tables or search in the official incomplete API documentation. *work in progress :-)*

![Preview](https://i.imgur.com/Qp8BOJY.png)

## Installation
### Requirements
- Node.js v18 or above
- Your favorite code editor with a TypeScript plugin enabled
- A ServiceNow instance

### Installation Steps
- Clone this repository
- Run:
```console
npm install
npm run build
npm link
```
- Switch to the root directory of your ServiceNow project (where you sync your scripts to)
- See the help and download the definitions you need
- The first time you ask tsnow to generate definitions, it will download the whole database schema (without actual data) from your instance. This may take some time, but it will be cached for future calls.

## Usage

```console
$ tsnow --help
Usage: tsnow [options] <instance> <tables...>

Build TypeScript definitions for the given instance in the current directory.
tables: specify one or more tables to add to the current project. Use exact_table_name or *contains_name or starts_with_name*
All parent and reference tables are included to encompass the transitive closure of references.

Options:
  -V, --version            output the version number
  -r|--reference-keys <n>  The number of dot-walks to support in addQuery. The more, the slower type checking.
                           (default: 1)
  -h, --help               display help for command
```

### Example

```console
$ tsnow myinstance incident task sys_user
```

This will generate TypeScript definitions for the `incident`, `task`, and `sys_user` tables, along with all their parent and referenced tables.

### Working with Generated Types
The tool creates a `tsconfig.json` file and an `@types` directory with TypeScript definitions.

Open your code editor with TypeScript support enabled. The editor will run the TypeScript compiler in the background, providing:
- Auto-completion for ServiceNow API methods
- Type checking for your scripts
- IntelliSense for table fields and their types

## Development

### Building from Source
```console
npm install
npm run build
```

The build output is placed in the `dist/` directory.

### Running Tests
```console
npm test
```

## Good to Know
- TypeScript infers types automatically, but it's not fully aware of how ServiceNow creates objects and injects global variables. You may see false-positive errors in certain cases.
- When TypeScript cannot determine the correct type, it infers `any` and skips type checking for that value.
- TypeScript recognizes JSDoc comments. Use them to specify exact types for parameters or return values:
```javascript

/**
   A function with exact GlideRecord types
  @param {GlideRecord<alm_hardware>} asset
  @param {GlideRecord<sys_user>} user
*/
function setAssetAssignedTo(asset, user) {
   asset.setValue("assigned_to", user.getValue("sys_id"));
}

/**
  A function accepting generic GlideRecord
  @param {GlideRecord} record
  @param {string} username
  @returns {boolean}
*/
function isAssetCreatedByUser(record, username) {
   return record.getValue("sys_created_by") === username;
}
```

## License

GPL License - see LICENSE file for details.

