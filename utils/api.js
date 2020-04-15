import grpcWeb from '../api/shoptour-proto/file_grpc_web_pb'
import grpcjs from '../api/shoptour-proto'


const api = new grpcjs(grpcWeb, 'https://shoptour.pro').API

export default api
