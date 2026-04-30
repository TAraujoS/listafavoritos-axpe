export const getErrorMessage = (code) => {
  switch(code) {
    case 'user.not.found':
      return 'Usuário não encontrado';
    case 'email.required':
      return 'O campo Email é obrigatório';
    case 'email.unique':
      return 'O email informado já está sendo usado';
    case 'pass.required':
      return 'O campo Senha é obrigatório';
    case 'credentials.invalid':
      return 'E-mail e/ou senha inválido(s)';
    case 'user.unauthorized':
      return 'Usuário não autorizado';
    case 'provider.invalid':
      return 'Provedor inválido';
    case 'id.required':
      return 'ID é obrigatório';
    case 'access_token.required':
      return 'access_token é obrigatório';
    case 'user.not.authenticated':
      return 'Usuário não logado';
    case 'phone.required':
      return 'O campo Telefone é obrigatório';
    case 'notification.alert.required':
      return 'O campo notificação dos alerta é obrigatório';
    case 'notification.favorite.required':
      return 'O campo notificação dos favoritos é obrigatório';
    case 'user.not.found':
      return 'Usuário não encontrado';
    case 'pass.cur.invalid':
      return 'A senha atual informada é inválida';
    case 'name.required':
      return 'O campo Nome é obrigatório';
    case 'pass.not.match':
      return 'A senha de confirmação não confere';
    default:
      return code;
  }
}