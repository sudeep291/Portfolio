import { ArrowRight } from 'lucide-react'

// Architecture of the Instacart Medallion Lakehouse, drawn from the project's README
// (layer contents, Gold tables and row counts, optimizations). Shown inside the
// project's browser frame in place of a screenshot.
const stages = [
  { name: 'Raw', detail: 'Instacart CSVs', meta: '~33.8M rows', tone: 'bg-zinc-100' },
  { name: 'Bronze', detail: 'Delta, as ingested', meta: 'raw layer', tone: 'bg-[#f6e0cb]' },
  { name: 'Silver', detail: 'Types, nulls, dedupe', meta: '206K users', tone: 'bg-[#e7e9ee]' },
  { name: 'Gold', detail: 'Star schema', meta: '2 dims + 2 facts', tone: 'bg-[#f7e9ad]' },
]

const goldTables = [
  ['dim_products', '49.6K'],
  ['dim_users', '206K'],
  ['fact_orders', '3.34M'],
  ['fact_order_items', '33.8M'],
]

export default function LakehouseDiagram() {
  return (
    <div className="flex w-full flex-col gap-3 bg-white p-3 font-mono text-[10px] leading-tight text-ink sm:p-4 sm:text-[11px] xl:text-xs">
      <p className="text-[9px] uppercase tracking-wider text-muted sm:text-[10px]">
        medallion lakehouse · azure databricks · delta lake
      </p>

      <ol className="grid grid-cols-2 gap-2 sm:flex sm:items-stretch sm:gap-1.5">
        {stages.map((stage, i) => (
          <li key={stage.name} className="flex min-w-0 items-stretch gap-1.5 sm:flex-1">
            <div className={`min-w-0 flex-1 rounded-lg border border-ink/15 px-2 py-1.5 ${stage.tone}`}>
              <p className="font-bold">{stage.name}</p>
              <p className="mt-0.5 text-ink/75">{stage.detail}</p>
              <p className="mt-0.5 text-ink/60">{stage.meta}</p>
            </div>
            {i < stages.length - 1 && (
              <ArrowRight className="hidden size-3.5 shrink-0 self-center text-ink/40 sm:block" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>

      <div className="grid flex-1 gap-2 sm:grid-cols-[1.15fr_1fr]">
        <div className="rounded-lg border border-ink/15 p-2">
          <p className="font-bold">Gold tables</p>
          <ul className="mt-1.5 space-y-1">
            {goldTables.map(([name, rows]) => (
              <li key={name} className="flex items-center justify-between gap-2">
                <span className="truncate">{name}</span>
                <span className="rounded bg-pop/60 px-1 font-bold">{rows}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="rounded-lg border border-ink/15 bg-p-sky/60 p-2">
            <p className="font-bold">Databricks Genie</p>
            <p className="mt-0.5 text-ink/75">Plain English → Spark SQL on Gold</p>
          </div>
          <div className="flex-1 rounded-lg border border-ink/15 p-2">
            <p className="font-bold">Optimizations</p>
            <p className="mt-0.5 text-ink/75">ZORDER BY (user_id, product_id)</p>
            <p className="mt-0.5 text-ink/75">Broadcast hash joins on lookups</p>
          </div>
        </div>
      </div>
    </div>
  )
}
