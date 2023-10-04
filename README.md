# Sql Formatter

Format sql files using the [sql-formatter](https://github.com/zeroturnaround/sql-formatter) npm package

forked from 'lea21st.vscode-sql-formatter'

## Install

- Open VS Code and press F1 or Ctrl + Shift + P to open command palette, select Install Extension and type `genone.hyshin-sqlformatter`. Or launch VS Code Quick Open (Ctrl + P), paste the following command, and press enter.

  `ext install genone.hyshin-sqlformatter`

## Options

```
  "editor.formatOnSave": true,
  "sql-formatter.dialect": "postgresql",
  "sql-formatter.commaPosition": "before",
  "sql-formatter.indentStyle": "tabularRight",
  "sql-formatter.logicalOperatorNewline": "before",
  "sql-formatter.newlineBeforeSemicolon": true,
  "sql-formatter.tabulateAlias": true,
  "sql-formatter.uppercase": true,
  "sql-formatter.paramTypes": { "named": [":"] },
  "[sql]": {
    "editor.defaultFormatter": "genone.hyshin-sqlformatter"
  }
```

## SQL formatter supports the following dialects:

- `"sql"` - (default) [Standard SQL][]
- `"bigquery"` - [GCP BigQuery][]
- `"db2"` - [IBM DB2][]
- `"hive"` - [Apache Hive][]
- `"mariadb"` - [MariaDB][]
- `"mysql"` - [MySQL][]
- `"n1ql"` - [Couchbase N1QL][]
- `"plsql"` - [Oracle PL/SQL][]
- `"postgresql"` - [PostgreSQL][]
- `"redshift"` - [Amazon Redshift][]
- `"singlestoredb"` - [SingleStoreDB][]
- `"snowflake"` - [Snowflake][]
- `"spark"` - [Spark][]
- `"sqlite"` - [SQLite][sqlite]
- `"transactsql"` or `"tsql"` - [SQL Server Transact-SQL][tsql]
- `"trino"` - [Trino][] (should also work for [Presto][], which is very similar dialect, though technically different)

## Configuration

**`sql-formatter.dialect`**: Defaults to "sql" (see the above list of supported dialects)

**`sql-formatter.uppercase`**: Defaults to false (not safe to use when SQL dialect has case-sensitive identifiers)

**`sql-formatter.indentStyle`**: Defaults to standard, Switches between different indentation styles.(standard / tabularLeft / tabularRight)

**`sql-formatter.commaPosition`**: Defaults to before, Defines where to place commas in lists of columns.(before / after / tabular)

**`sql-formatter.logicalOperatorNewline`**: Defaults to before, Decides newline placement before or after logical operators (AND, OR, XOR).(before / after)

**`sql-formatter.tabulateAlias`**: Defaults to false, Aligns column aliases into a single column. Does not effect table name aliases.

**`sql-formatter.linesBetweenQueries`**: Number of linebreaks between queries. Defaults to 2.

**`sql-formatter.newlineBeforeSemicolon`**: Defaults to true, Whether to place query separator (;) on a separate line.

**`sql-formatter.paramTypes`**: Defaults to null, Specifies parameter types to support when parsing SQL prepared statements.
