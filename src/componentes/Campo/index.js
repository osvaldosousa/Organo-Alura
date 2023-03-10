import './campo.css'

const CampoTexto = ({
  type = 'text',
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false
}) => {
  // const classType = type === 'color' ? 'campo -color': 'campo';
  return (
    <div className={`campo -${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={evento => aoAlterado(evento.target.value)}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  )
}

export default CampoTexto
