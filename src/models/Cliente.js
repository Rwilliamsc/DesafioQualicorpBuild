class Cliente {
  constructor () {
    this.id = null
    this.cpf = ''
    this.nome = ''
    this.email = null
    this.telefone = null
    this.dataNascimento = null
  }

  set json (cliente) {
    this.id = cliente.id || null
    this.cpf = cliente.cpf
    this.nome = cliente.nome
    this.email = cliente.email || null
    this.telefone = cliente.telefone || null
    this.dataNascimento = cliente.dataNascimento || null
  }

  get json () {
    return this
  }
}

export { Cliente }
