exports.buildResponse = function(success, message, data = {}, error=null) {
    var response = data;
    response.success = success;
    response.message = message;
    response.error = error;
    return response;
}