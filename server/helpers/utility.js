/* 200 - OK */
/* 301 - RESOURCE MOVED */
/* 404 - NOT FOUND */
/*500 - INTERNAL SERVER ERRO */
const global = {
  serverResponse: (success, message, data) => {
    return {
      success: success,
      message: message,
      data: data
    }  
  }
}

module.exports = global;