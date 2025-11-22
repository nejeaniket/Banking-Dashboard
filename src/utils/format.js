export function currency(value){
  if(value == null) return '-'
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(Number(value))
}

export function shortDate(iso){
  if(!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB')
}
