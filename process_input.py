from xmlrpc.server import SimpleXMLRPCServer
from xmlrpc.server import SimpleXMLRPCRequestHandler

# Restringindo as solicitações a um caminho específico (/RPC2)
class RequestHandler(SimpleXMLRPCRequestHandler):
    rpc_paths = ('/RPC2',)

# Função que receberá os inteiros enviados pelo formulário HTML
def process_input(integer1, integer2):
    # Faça o que desejar com os inteiros recebidos
    # Neste exemplo, apenas os imprime
    print("Inteiro 1:", integer1)
    print("Inteiro 2:", integer2)
    return "Inteiros recebidos com sucesso."

# Configurando o servidor XML-RPC
server = SimpleXMLRPCServer(('localhost', 8000), requestHandler=RequestHandler)
server.register_introspection_functions()
server.register_function(process_input, 'process_input')

# Iniciando o servidor
print("Servidor XML-RPC iniciado na porta 8000...")
server.serve_forever()
