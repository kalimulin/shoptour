import grpcWeb from '../shoptour-proto/file_grpc_web_pb'
import grpcjs from '../shoptour-proto/grpcjs'

console.log('grpcWeb', grpcWeb)
console.log('grpcJS', new grpcjs(grpcWeb, 'http://shoptour.pro').API)



console.log('func', new grpcjs(grpcWeb, 'http://shoptour.pro').API.GetCountriesList({
    ClientId: 'abc123'
}, data => {
    console.log('GetCountriesList::data', data)
}, error => {
    console.log('GetCountriesList::done', error)
}, status => {

    console.log('GetCountriesList::status', status)
}))
