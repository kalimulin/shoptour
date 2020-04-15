/**
 * @fileoverview gRPC-Web generated client stub for pineapples
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.pineapples = require('./file_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pineapples.APIClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pineapples.APIPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.pineapples.APIClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.pineapples.APIClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SetEmployeePercentReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_SetEmployeePercent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.SetEmployeePercentReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.SetEmployeePercentReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.setEmployeePercent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/SetEmployeePercent',
      request,
      metadata,
      methodInfo_API_SetEmployeePercent,
      callback);
};


/**
 * @param {!proto.pineapples.SetEmployeePercentReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.setEmployeePercent =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setEmployeePercent(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateFullNameReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_UpdateFullName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.UpdateFullNameReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateFullNameReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateFullName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateFullName',
      request,
      metadata,
      methodInfo_API_UpdateFullName,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateFullNameReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateFullName =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateFullName(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateEmailReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_UpdateEmail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.UpdateEmailReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateEmailReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateEmail',
      request,
      metadata,
      methodInfo_API_UpdateEmail,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateEmailReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateEmail =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateEmail(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdatePasswordReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_UpdatePassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.UpdatePasswordReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdatePasswordReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updatePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdatePassword',
      request,
      metadata,
      methodInfo_API_UpdatePassword,
      callback);
};


/**
 * @param {!proto.pineapples.UpdatePasswordReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updatePassword =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updatePassword(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddNewDispatchingPartyManagerReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_AddNewDispatchingPartyManager = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.AddNewDispatchingPartyManagerReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddNewDispatchingPartyManagerReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addNewDispatchingPartyManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddNewDispatchingPartyManager',
      request,
      metadata,
      methodInfo_API_AddNewDispatchingPartyManager,
      callback);
};


/**
 * @param {!proto.pineapples.AddNewDispatchingPartyManagerReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addNewDispatchingPartyManager =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addNewDispatchingPartyManager(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddNewTourAgencyManagerReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_AddNewTourAgencyManager = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.AddNewTourAgencyManagerReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddNewTourAgencyManagerReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addNewTourAgencyManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddNewTourAgencyManager',
      request,
      metadata,
      methodInfo_API_AddNewTourAgencyManager,
      callback);
};


/**
 * @param {!proto.pineapples.AddNewTourAgencyManagerReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addNewTourAgencyManager =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addNewTourAgencyManager(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddNewTourAgencyEmployeeReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_AddNewTourAgencyEmployee = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.AddNewTourAgencyEmployeeReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddNewTourAgencyEmployeeReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addNewTourAgencyEmployee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddNewTourAgencyEmployee',
      request,
      metadata,
      methodInfo_API_AddNewTourAgencyEmployee,
      callback);
};


/**
 * @param {!proto.pineapples.AddNewTourAgencyEmployeeReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addNewTourAgencyEmployee =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addNewTourAgencyEmployee(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddClientReq,
 *   !proto.pineapples.Client>}
 */
const methodInfo_API_AddClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Client,
  /** @param {!proto.pineapples.AddClientReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Client.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddClientReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Client)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Client>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddClient',
      request,
      metadata,
      methodInfo_API_AddClient,
      callback);
};


/**
 * @param {!proto.pineapples.AddClientReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Client>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addClient =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addClient(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateClientFullNameReq,
 *   !proto.pineapples.Client>}
 */
const methodInfo_API_UpdateClientFullName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Client,
  /** @param {!proto.pineapples.UpdateClientFullNameReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Client.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateClientFullNameReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Client)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Client>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateClientFullName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateClientFullName',
      request,
      metadata,
      methodInfo_API_UpdateClientFullName,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateClientFullNameReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Client>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateClientFullName =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateClientFullName(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateClientAgeReq,
 *   !proto.pineapples.Client>}
 */
const methodInfo_API_UpdateClientAge = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Client,
  /** @param {!proto.pineapples.UpdateClientAgeReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Client.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateClientAgeReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Client)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Client>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateClientAge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateClientAge',
      request,
      metadata,
      methodInfo_API_UpdateClientAge,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateClientAgeReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Client>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateClientAge =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateClientAge(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateClientGenderReq,
 *   !proto.pineapples.Client>}
 */
const methodInfo_API_UpdateClientGender = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Client,
  /** @param {!proto.pineapples.UpdateClientGenderReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Client.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateClientGenderReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Client)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Client>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateClientGender =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateClientGender',
      request,
      metadata,
      methodInfo_API_UpdateClientGender,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateClientGenderReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Client>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateClientGender =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateClientGender(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateClientContactInfoReq,
 *   !proto.pineapples.Client>}
 */
const methodInfo_API_UpdateClientContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Client,
  /** @param {!proto.pineapples.UpdateClientContactInfoReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Client.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateClientContactInfoReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Client)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Client>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateClientContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateClientContactInfo',
      request,
      metadata,
      methodInfo_API_UpdateClientContactInfo,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateClientContactInfoReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Client>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateClientContactInfo =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateClientContactInfo(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddVisitReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_AddVisit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.AddVisitReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddVisitReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addVisit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddVisit',
      request,
      metadata,
      methodInfo_API_AddVisit,
      callback);
};


/**
 * @param {!proto.pineapples.AddVisitReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addVisit =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addVisit(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddClientAndVisitReq,
 *   !proto.pineapples.AddClientAndVisitRep>}
 */
const methodInfo_API_AddClientAndVisit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.AddClientAndVisitRep,
  /** @param {!proto.pineapples.AddClientAndVisitReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.AddClientAndVisitRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddClientAndVisitReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.AddClientAndVisitRep)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.AddClientAndVisitRep>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addClientAndVisit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddClientAndVisit',
      request,
      metadata,
      methodInfo_API_AddClientAndVisit,
      callback);
};


/**
 * @param {!proto.pineapples.AddClientAndVisitReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.AddClientAndVisitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addClientAndVisit =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addClientAndVisit(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddNewHostingPartyManagerReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_AddNewHostingPartyManager = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.AddNewHostingPartyManagerReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddNewHostingPartyManagerReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addNewHostingPartyManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddNewHostingPartyManager',
      request,
      metadata,
      methodInfo_API_AddNewHostingPartyManager,
      callback);
};


/**
 * @param {!proto.pineapples.AddNewHostingPartyManagerReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addNewHostingPartyManager =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addNewHostingPartyManager(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetUsersListReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_GetUsersList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.GetUsersListReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetUsersListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getUsersList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetUsersList',
      request,
      metadata,
      methodInfo_API_GetUsersList);
};


/**
 * @param {!proto.pineapples.GetUsersListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getUsersList =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetUsersList',
      request,
      metadata,
      methodInfo_API_GetUsersList);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetClientsListReq,
 *   !proto.pineapples.Client>}
 */
const methodInfo_API_GetClientsList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Client,
  /** @param {!proto.pineapples.GetClientsListReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Client.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetClientsListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Client>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getClientsList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetClientsList',
      request,
      metadata,
      methodInfo_API_GetClientsList);
};


/**
 * @param {!proto.pineapples.GetClientsListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Client>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getClientsList =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetClientsList',
      request,
      metadata,
      methodInfo_API_GetClientsList);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetHotelsListReq,
 *   !proto.pineapples.Hotel>}
 */
const methodInfo_API_GetHotelsList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Hotel,
  /** @param {!proto.pineapples.GetHotelsListReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Hotel.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetHotelsListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Hotel>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getHotelsList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetHotelsList',
      request,
      metadata,
      methodInfo_API_GetHotelsList);
};


/**
 * @param {!proto.pineapples.GetHotelsListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Hotel>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getHotelsList =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetHotelsList',
      request,
      metadata,
      methodInfo_API_GetHotelsList);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetTourPartnersListReq,
 *   !proto.pineapples.TourPartner>}
 */
const methodInfo_API_GetTourPartnersList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.TourPartner,
  /** @param {!proto.pineapples.GetTourPartnersListReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.TourPartner.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetTourPartnersListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.TourPartner>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getTourPartnersList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetTourPartnersList',
      request,
      metadata,
      methodInfo_API_GetTourPartnersList);
};


/**
 * @param {!proto.pineapples.GetTourPartnersListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.TourPartner>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getTourPartnersList =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetTourPartnersList',
      request,
      metadata,
      methodInfo_API_GetTourPartnersList);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetAirlinesListReq,
 *   !proto.pineapples.Airline>}
 */
const methodInfo_API_GetAirlinesList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Airline,
  /** @param {!proto.pineapples.GetAirlinesListReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Airline.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetAirlinesListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Airline>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getAirlinesList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetAirlinesList',
      request,
      metadata,
      methodInfo_API_GetAirlinesList);
};


/**
 * @param {!proto.pineapples.GetAirlinesListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Airline>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getAirlinesList =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetAirlinesList',
      request,
      metadata,
      methodInfo_API_GetAirlinesList);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetCitiesListReq,
 *   !proto.pineapples.City>}
 */
const methodInfo_API_GetCitiesList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.City,
  /** @param {!proto.pineapples.GetCitiesListReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.City.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetCitiesListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.City>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getCitiesList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetCitiesList',
      request,
      metadata,
      methodInfo_API_GetCitiesList);
};


/**
 * @param {!proto.pineapples.GetCitiesListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.City>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getCitiesList =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetCitiesList',
      request,
      metadata,
      methodInfo_API_GetCitiesList);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetCountriesListReq,
 *   !proto.pineapples.Country>}
 */
const methodInfo_API_GetCountriesList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Country,
  /** @param {!proto.pineapples.GetCountriesListReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Country.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetCountriesListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Country>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getCountriesList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetCountriesList',
      request,
      metadata,
      methodInfo_API_GetCountriesList);
};


/**
 * @param {!proto.pineapples.GetCountriesListReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Country>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getCountriesList =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetCountriesList',
      request,
      metadata,
      methodInfo_API_GetCountriesList);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetHotelsByNameReq,
 *   !proto.pineapples.Hotel>}
 */
const methodInfo_API_GetHotelsByName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Hotel,
  /** @param {!proto.pineapples.GetHotelsByNameReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Hotel.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetHotelsByNameReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Hotel>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getHotelsByName =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetHotelsByName',
      request,
      metadata,
      methodInfo_API_GetHotelsByName);
};


/**
 * @param {!proto.pineapples.GetHotelsByNameReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Hotel>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getHotelsByName =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetHotelsByName',
      request,
      metadata,
      methodInfo_API_GetHotelsByName);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetCitiesByNameReq,
 *   !proto.pineapples.City>}
 */
const methodInfo_API_GetCitiesByName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.City,
  /** @param {!proto.pineapples.GetCitiesByNameReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.City.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetCitiesByNameReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.City>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getCitiesByName =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetCitiesByName',
      request,
      metadata,
      methodInfo_API_GetCitiesByName);
};


/**
 * @param {!proto.pineapples.GetCitiesByNameReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.City>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getCitiesByName =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetCitiesByName',
      request,
      metadata,
      methodInfo_API_GetCitiesByName);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetCountriesByNameReq,
 *   !proto.pineapples.Country>}
 */
const methodInfo_API_GetCountriesByName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Country,
  /** @param {!proto.pineapples.GetCountriesByNameReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Country.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetCountriesByNameReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Country>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getCountriesByName =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetCountriesByName',
      request,
      metadata,
      methodInfo_API_GetCountriesByName);
};


/**
 * @param {!proto.pineapples.GetCountriesByNameReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Country>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getCountriesByName =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetCountriesByName',
      request,
      metadata,
      methodInfo_API_GetCountriesByName);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetVisitsReq,
 *   !proto.pineapples.VisitRep>}
 */
const methodInfo_API_GetVisits = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.VisitRep,
  /** @param {!proto.pineapples.GetVisitsReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.VisitRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetVisitsReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.VisitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getVisits =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetVisits',
      request,
      metadata,
      methodInfo_API_GetVisits);
};


/**
 * @param {!proto.pineapples.GetVisitsReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.VisitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getVisits =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetVisits',
      request,
      metadata,
      methodInfo_API_GetVisits);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetVisitsByClientReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_GetVisitsByClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.GetVisitsByClientReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetVisitsByClientReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getVisitsByClient =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetVisitsByClient',
      request,
      metadata,
      methodInfo_API_GetVisitsByClient);
};


/**
 * @param {!proto.pineapples.GetVisitsByClientReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getVisitsByClient =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetVisitsByClient',
      request,
      metadata,
      methodInfo_API_GetVisitsByClient);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddRoleReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_AddRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.AddRoleReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddRoleReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddRole',
      request,
      metadata,
      methodInfo_API_AddRole,
      callback);
};


/**
 * @param {!proto.pineapples.AddRoleReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addRole =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addRole(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.DeleteRoleReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_DeleteRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.DeleteRoleReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.DeleteRoleReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.deleteRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/DeleteRole',
      request,
      metadata,
      methodInfo_API_DeleteRole,
      callback);
};


/**
 * @param {!proto.pineapples.DeleteRoleReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.deleteRole =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteRole(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddCountryReq,
 *   !proto.pineapples.Country>}
 */
const methodInfo_API_AddCountry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Country,
  /** @param {!proto.pineapples.AddCountryReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Country.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddCountryReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Country)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Country>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addCountry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddCountry',
      request,
      metadata,
      methodInfo_API_AddCountry,
      callback);
};


/**
 * @param {!proto.pineapples.AddCountryReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Country>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addCountry =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addCountry(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddCityReq,
 *   !proto.pineapples.City>}
 */
const methodInfo_API_AddCity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.City,
  /** @param {!proto.pineapples.AddCityReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.City.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddCityReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.City)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.City>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addCity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddCity',
      request,
      metadata,
      methodInfo_API_AddCity,
      callback);
};


/**
 * @param {!proto.pineapples.AddCityReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.City>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addCity =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addCity(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddHotelReq,
 *   !proto.pineapples.Hotel>}
 */
const methodInfo_API_AddHotel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Hotel,
  /** @param {!proto.pineapples.AddHotelReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Hotel.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddHotelReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Hotel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Hotel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addHotel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddHotel',
      request,
      metadata,
      methodInfo_API_AddHotel,
      callback);
};


/**
 * @param {!proto.pineapples.AddHotelReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Hotel>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addHotel =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addHotel(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddTourPartnerReq,
 *   !proto.pineapples.TourPartner>}
 */
const methodInfo_API_AddTourPartner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.TourPartner,
  /** @param {!proto.pineapples.AddTourPartnerReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.TourPartner.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddTourPartnerReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.TourPartner)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.TourPartner>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addTourPartner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddTourPartner',
      request,
      metadata,
      methodInfo_API_AddTourPartner,
      callback);
};


/**
 * @param {!proto.pineapples.AddTourPartnerReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.TourPartner>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addTourPartner =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addTourPartner(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddAirlineReq,
 *   !proto.pineapples.Airline>}
 */
const methodInfo_API_AddAirline = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Airline,
  /** @param {!proto.pineapples.AddAirlineReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Airline.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddAirlineReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Airline)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Airline>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addAirline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddAirline',
      request,
      metadata,
      methodInfo_API_AddAirline,
      callback);
};


/**
 * @param {!proto.pineapples.AddAirlineReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Airline>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addAirline =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addAirline(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AuthenticateReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_Authenticate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.AuthenticateReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.AuthenticateReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.authenticate =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/Authenticate',
      request,
      metadata,
      methodInfo_API_Authenticate);
};


/**
 * @param {!proto.pineapples.AuthenticateReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.authenticate =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/Authenticate',
      request,
      metadata,
      methodInfo_API_Authenticate);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetUserByIdReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_GetUserById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.GetUserByIdReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetUserByIdReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getUserById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/GetUserById',
      request,
      metadata,
      methodInfo_API_GetUserById,
      callback);
};


/**
 * @param {!proto.pineapples.GetUserByIdReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getUserById =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getUserById(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.LogOutReq,
 *   !proto.pineapples.Dummy>}
 */
const methodInfo_API_LogOut = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Dummy,
  /** @param {!proto.pineapples.LogOutReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Dummy.deserializeBinary
);


/**
 * @param {!proto.pineapples.LogOutReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Dummy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Dummy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.logOut =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/LogOut',
      request,
      metadata,
      methodInfo_API_LogOut,
      callback);
};


/**
 * @param {!proto.pineapples.LogOutReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Dummy>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.logOut =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.logOut(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.CheckUserReq,
 *   !proto.pineapples.CheckUserRep>}
 */
const methodInfo_API_CheckUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.CheckUserRep,
  /** @param {!proto.pineapples.CheckUserReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.CheckUserRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.CheckUserReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.CheckUserRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.checkUser =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/CheckUser',
      request,
      metadata,
      methodInfo_API_CheckUser);
};


/**
 * @param {!proto.pineapples.CheckUserReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.CheckUserRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.checkUser =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/CheckUser',
      request,
      metadata,
      methodInfo_API_CheckUser);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddCardForClientReq,
 *   !proto.pineapples.Dummy>}
 */
const methodInfo_API_AddCardForClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Dummy,
  /** @param {!proto.pineapples.AddCardForClientReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Dummy.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddCardForClientReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Dummy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Dummy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addCardForClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddCardForClient',
      request,
      metadata,
      methodInfo_API_AddCardForClient,
      callback);
};


/**
 * @param {!proto.pineapples.AddCardForClientReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Dummy>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addCardForClient =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addCardForClient(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GenerateCardNumbersReq,
 *   !proto.pineapples.Card>}
 */
const methodInfo_API_GenerateCardNumbers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Card,
  /** @param {!proto.pineapples.GenerateCardNumbersReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Card.deserializeBinary
);


/**
 * @param {!proto.pineapples.GenerateCardNumbersReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Card>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.generateCardNumbers =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GenerateCardNumbers',
      request,
      metadata,
      methodInfo_API_GenerateCardNumbers);
};


/**
 * @param {!proto.pineapples.GenerateCardNumbersReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Card>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.generateCardNumbers =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GenerateCardNumbers',
      request,
      metadata,
      methodInfo_API_GenerateCardNumbers);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetClientByCardReq,
 *   !proto.pineapples.Client>}
 */
const methodInfo_API_GetClientByCard = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Client,
  /** @param {!proto.pineapples.GetClientByCardReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Client.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetClientByCardReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Client)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Client>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getClientByCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/GetClientByCard',
      request,
      metadata,
      methodInfo_API_GetClientByCard,
      callback);
};


/**
 * @param {!proto.pineapples.GetClientByCardReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Client>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getClientByCard =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getClientByCard(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetClientByIdReq,
 *   !proto.pineapples.Client>}
 */
const methodInfo_API_GetClientById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Client,
  /** @param {!proto.pineapples.GetClientByIdReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Client.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetClientByIdReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Client)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Client>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getClientById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/GetClientById',
      request,
      metadata,
      methodInfo_API_GetClientById,
      callback);
};


/**
 * @param {!proto.pineapples.GetClientByIdReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Client>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getClientById =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getClientById(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetCardByClientReq,
 *   !proto.pineapples.Card>}
 */
const methodInfo_API_GetCardByClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Card,
  /** @param {!proto.pineapples.GetCardByClientReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Card.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetCardByClientReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Card)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Card>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getCardByClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/GetCardByClient',
      request,
      metadata,
      methodInfo_API_GetCardByClient,
      callback);
};


/**
 * @param {!proto.pineapples.GetCardByClientReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Card>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getCardByClient =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getCardByClient(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetHostingPartyManagersReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_GetHostingPartyManagers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.GetHostingPartyManagersReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetHostingPartyManagersReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getHostingPartyManagers =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetHostingPartyManagers',
      request,
      metadata,
      methodInfo_API_GetHostingPartyManagers);
};


/**
 * @param {!proto.pineapples.GetHostingPartyManagersReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getHostingPartyManagers =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetHostingPartyManagers',
      request,
      metadata,
      methodInfo_API_GetHostingPartyManagers);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetDispatchingPartyManagersReq,
 *   !proto.pineapples.User>}
 */
const methodInfo_API_GetDispatchingPartyManagers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.User,
  /** @param {!proto.pineapples.GetDispatchingPartyManagersReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.User.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetDispatchingPartyManagersReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getDispatchingPartyManagers =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetDispatchingPartyManagers',
      request,
      metadata,
      methodInfo_API_GetDispatchingPartyManagers);
};


/**
 * @param {!proto.pineapples.GetDispatchingPartyManagersReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.User>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getDispatchingPartyManagers =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetDispatchingPartyManagers',
      request,
      metadata,
      methodInfo_API_GetDispatchingPartyManagers);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SearchClientReq,
 *   !proto.pineapples.Client>}
 */
const methodInfo_API_SearchClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Client,
  /** @param {!proto.pineapples.SearchClientReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Client.deserializeBinary
);


/**
 * @param {!proto.pineapples.SearchClientReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Client>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.searchClient =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/SearchClient',
      request,
      metadata,
      methodInfo_API_SearchClient);
};


/**
 * @param {!proto.pineapples.SearchClientReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Client>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.searchClient =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/SearchClient',
      request,
      metadata,
      methodInfo_API_SearchClient);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetMyVisitsReq,
 *   !proto.pineapples.VisitRep>}
 */
const methodInfo_API_GetMyVisits = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.VisitRep,
  /** @param {!proto.pineapples.GetMyVisitsReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.VisitRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetMyVisitsReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.VisitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getMyVisits =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetMyVisits',
      request,
      metadata,
      methodInfo_API_GetMyVisits);
};


/**
 * @param {!proto.pineapples.GetMyVisitsReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.VisitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getMyVisits =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetMyVisits',
      request,
      metadata,
      methodInfo_API_GetMyVisits);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetVisitsReq,
 *   !proto.pineapples.VisitRep>}
 */
const methodInfo_API_GetVisitsForDisp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.VisitRep,
  /** @param {!proto.pineapples.GetVisitsReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.VisitRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetVisitsReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.VisitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getVisitsForDisp =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetVisitsForDisp',
      request,
      metadata,
      methodInfo_API_GetVisitsForDisp);
};


/**
 * @param {!proto.pineapples.GetVisitsReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.VisitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getVisitsForDisp =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetVisitsForDisp',
      request,
      metadata,
      methodInfo_API_GetVisitsForDisp);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateCountryReq,
 *   !proto.pineapples.Country>}
 */
const methodInfo_API_UpdateCountry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Country,
  /** @param {!proto.pineapples.UpdateCountryReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Country.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateCountryReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Country)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Country>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateCountry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateCountry',
      request,
      metadata,
      methodInfo_API_UpdateCountry,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateCountryReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Country>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateCountry =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateCountry(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateCityReq,
 *   !proto.pineapples.City>}
 */
const methodInfo_API_UpdateCity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.City,
  /** @param {!proto.pineapples.UpdateCityReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.City.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateCityReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.City)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.City>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateCity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateCity',
      request,
      metadata,
      methodInfo_API_UpdateCity,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateCityReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.City>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateCity =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateCity(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateHotelReq,
 *   !proto.pineapples.Hotel>}
 */
const methodInfo_API_UpdateHotel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Hotel,
  /** @param {!proto.pineapples.UpdateHotelReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Hotel.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateHotelReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Hotel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Hotel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateHotel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateHotel',
      request,
      metadata,
      methodInfo_API_UpdateHotel,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateHotelReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Hotel>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateHotel =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateHotel(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateTourPartnerReq,
 *   !proto.pineapples.TourPartner>}
 */
const methodInfo_API_UpdateTourPartner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.TourPartner,
  /** @param {!proto.pineapples.UpdateTourPartnerReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.TourPartner.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateTourPartnerReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.TourPartner)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.TourPartner>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateTourPartner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateTourPartner',
      request,
      metadata,
      methodInfo_API_UpdateTourPartner,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateTourPartnerReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.TourPartner>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateTourPartner =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateTourPartner(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateAirlineReq,
 *   !proto.pineapples.Airline>}
 */
const methodInfo_API_UpdateAirline = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Airline,
  /** @param {!proto.pineapples.UpdateAirlineReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Airline.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateAirlineReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Airline)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Airline>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateAirline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateAirline',
      request,
      metadata,
      methodInfo_API_UpdateAirline,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateAirlineReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Airline>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateAirline =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateAirline(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.DeleteCountryReq,
 *   !proto.pineapples.Dummy>}
 */
const methodInfo_API_DeleteCountry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Dummy,
  /** @param {!proto.pineapples.DeleteCountryReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Dummy.deserializeBinary
);


/**
 * @param {!proto.pineapples.DeleteCountryReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Dummy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Dummy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.deleteCountry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/DeleteCountry',
      request,
      metadata,
      methodInfo_API_DeleteCountry,
      callback);
};


/**
 * @param {!proto.pineapples.DeleteCountryReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Dummy>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.deleteCountry =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteCountry(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.DeleteCityReq,
 *   !proto.pineapples.Dummy>}
 */
const methodInfo_API_DeleteCity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Dummy,
  /** @param {!proto.pineapples.DeleteCityReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Dummy.deserializeBinary
);


/**
 * @param {!proto.pineapples.DeleteCityReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Dummy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Dummy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.deleteCity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/DeleteCity',
      request,
      metadata,
      methodInfo_API_DeleteCity,
      callback);
};


/**
 * @param {!proto.pineapples.DeleteCityReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Dummy>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.deleteCity =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteCity(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.DeleteHotelReq,
 *   !proto.pineapples.Dummy>}
 */
const methodInfo_API_DeleteHotel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Dummy,
  /** @param {!proto.pineapples.DeleteHotelReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Dummy.deserializeBinary
);


/**
 * @param {!proto.pineapples.DeleteHotelReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Dummy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Dummy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.deleteHotel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/DeleteHotel',
      request,
      metadata,
      methodInfo_API_DeleteHotel,
      callback);
};


/**
 * @param {!proto.pineapples.DeleteHotelReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Dummy>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.deleteHotel =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteHotel(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddCategoryReq,
 *   !proto.pineapples.Category>}
 */
const methodInfo_API_AddCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Category,
  /** @param {!proto.pineapples.AddCategoryReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Category.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddCategoryReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Category)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Category>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddCategory',
      request,
      metadata,
      methodInfo_API_AddCategory,
      callback);
};


/**
 * @param {!proto.pineapples.AddCategoryReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Category>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addCategory =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addCategory(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddGoodReq,
 *   !proto.pineapples.Good>}
 */
const methodInfo_API_AddGood = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Good,
  /** @param {!proto.pineapples.AddGoodReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Good.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddGoodReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Good)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Good>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addGood =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddGood',
      request,
      metadata,
      methodInfo_API_AddGood,
      callback);
};


/**
 * @param {!proto.pineapples.AddGoodReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Good>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addGood =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addGood(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateCategoryReq,
 *   !proto.pineapples.Category>}
 */
const methodInfo_API_UpdateCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Category,
  /** @param {!proto.pineapples.UpdateCategoryReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Category.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateCategoryReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Category)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Category>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateCategory',
      request,
      metadata,
      methodInfo_API_UpdateCategory,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateCategoryReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Category>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateCategory =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateCategory(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateGoodReq,
 *   !proto.pineapples.Good>}
 */
const methodInfo_API_UpdateGood = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Good,
  /** @param {!proto.pineapples.UpdateGoodReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Good.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateGoodReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Good)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Good>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateGood =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateGood',
      request,
      metadata,
      methodInfo_API_UpdateGood,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateGoodReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Good>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateGood =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateGood(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.DeleteCategoryReq,
 *   !proto.pineapples.Dummy>}
 */
const methodInfo_API_DeleteCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Dummy,
  /** @param {!proto.pineapples.DeleteCategoryReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Dummy.deserializeBinary
);


/**
 * @param {!proto.pineapples.DeleteCategoryReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Dummy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Dummy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.deleteCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/DeleteCategory',
      request,
      metadata,
      methodInfo_API_DeleteCategory,
      callback);
};


/**
 * @param {!proto.pineapples.DeleteCategoryReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Dummy>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.deleteCategory =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteCategory(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.DeleteGoodReq,
 *   !proto.pineapples.Dummy>}
 */
const methodInfo_API_DeleteGood = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Dummy,
  /** @param {!proto.pineapples.DeleteGoodReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Dummy.deserializeBinary
);


/**
 * @param {!proto.pineapples.DeleteGoodReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Dummy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Dummy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.deleteGood =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/DeleteGood',
      request,
      metadata,
      methodInfo_API_DeleteGood,
      callback);
};


/**
 * @param {!proto.pineapples.DeleteGoodReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Dummy>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.deleteGood =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteGood(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddPurchaseReq,
 *   !proto.pineapples.Purchase>}
 */
const methodInfo_API_AddPurchase = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Purchase,
  /** @param {!proto.pineapples.AddPurchaseReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Purchase.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddPurchaseReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Purchase)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Purchase>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addPurchase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddPurchase',
      request,
      metadata,
      methodInfo_API_AddPurchase,
      callback);
};


/**
 * @param {!proto.pineapples.AddPurchaseReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Purchase>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addPurchase =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addPurchase(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetPurchasesByCardInStoreReq,
 *   !proto.pineapples.GetPurchasesByCardInStoreRep>}
 */
const methodInfo_API_GetPurchasesByCardInStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.GetPurchasesByCardInStoreRep,
  /** @param {!proto.pineapples.GetPurchasesByCardInStoreReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.GetPurchasesByCardInStoreRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetPurchasesByCardInStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.GetPurchasesByCardInStoreRep)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetPurchasesByCardInStoreRep>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getPurchasesByCardInStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/GetPurchasesByCardInStore',
      request,
      metadata,
      methodInfo_API_GetPurchasesByCardInStore,
      callback);
};


/**
 * @param {!proto.pineapples.GetPurchasesByCardInStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.GetPurchasesByCardInStoreRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getPurchasesByCardInStore =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getPurchasesByCardInStore(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetStoresReq,
 *   !proto.pineapples.Store>}
 */
const methodInfo_API_GetStores = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Store,
  /** @param {!proto.pineapples.GetStoresReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Store.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetStoresReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Store>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getStores =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetStores',
      request,
      metadata,
      methodInfo_API_GetStores);
};


/**
 * @param {!proto.pineapples.GetStoresReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Store>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getStores =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetStores',
      request,
      metadata,
      methodInfo_API_GetStores);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetStoreReq,
 *   !proto.pineapples.Store>}
 */
const methodInfo_API_GetStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Store,
  /** @param {!proto.pineapples.GetStoreReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Store.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Store)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Store>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/GetStore',
      request,
      metadata,
      methodInfo_API_GetStore,
      callback);
};


/**
 * @param {!proto.pineapples.GetStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Store>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getStore =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getStore(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddStoreReq,
 *   !proto.pineapples.Store>}
 */
const methodInfo_API_AddStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Store,
  /** @param {!proto.pineapples.AddStoreReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Store.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Store)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Store>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddStore',
      request,
      metadata,
      methodInfo_API_AddStore,
      callback);
};


/**
 * @param {!proto.pineapples.AddStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Store>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addStore =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addStore(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateStoreReq,
 *   !proto.pineapples.Store>}
 */
const methodInfo_API_UpdateStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Store,
  /** @param {!proto.pineapples.UpdateStoreReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Store.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Store)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Store>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateStore',
      request,
      metadata,
      methodInfo_API_UpdateStore,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Store>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateStore =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateStore(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.DeleteStoreReq,
 *   !proto.pineapples.Dummy>}
 */
const methodInfo_API_DeleteStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Dummy,
  /** @param {!proto.pineapples.DeleteStoreReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Dummy.deserializeBinary
);


/**
 * @param {!proto.pineapples.DeleteStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Dummy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Dummy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.deleteStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/DeleteStore',
      request,
      metadata,
      methodInfo_API_DeleteStore,
      callback);
};


/**
 * @param {!proto.pineapples.DeleteStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Dummy>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.deleteStore =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteStore(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetPercentsByStoreReq,
 *   !proto.pineapples.Percent>}
 */
const methodInfo_API_GetPercentsByStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Percent,
  /** @param {!proto.pineapples.GetPercentsByStoreReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Percent.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetPercentsByStoreReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Percent>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getPercentsByStore =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetPercentsByStore',
      request,
      metadata,
      methodInfo_API_GetPercentsByStore);
};


/**
 * @param {!proto.pineapples.GetPercentsByStoreReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Percent>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getPercentsByStore =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetPercentsByStore',
      request,
      metadata,
      methodInfo_API_GetPercentsByStore);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetGoodsByStoreReq,
 *   !proto.pineapples.Good>}
 */
const methodInfo_API_GetGoodsByStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Good,
  /** @param {!proto.pineapples.GetGoodsByStoreReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Good.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetGoodsByStoreReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Good>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getGoodsByStore =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetGoodsByStore',
      request,
      metadata,
      methodInfo_API_GetGoodsByStore);
};


/**
 * @param {!proto.pineapples.GetGoodsByStoreReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Good>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getGoodsByStore =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetGoodsByStore',
      request,
      metadata,
      methodInfo_API_GetGoodsByStore);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetGoodsReq,
 *   !proto.pineapples.Good>}
 */
const methodInfo_API_GetGoods = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Good,
  /** @param {!proto.pineapples.GetGoodsReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Good.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetGoodsReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Good>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getGoods =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetGoods',
      request,
      metadata,
      methodInfo_API_GetGoods);
};


/**
 * @param {!proto.pineapples.GetGoodsReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Good>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getGoods =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetGoods',
      request,
      metadata,
      methodInfo_API_GetGoods);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetCategoriesReq,
 *   !proto.pineapples.Category>}
 */
const methodInfo_API_GetCategories = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Category,
  /** @param {!proto.pineapples.GetCategoriesReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Category.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetCategoriesReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Category>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getCategories =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetCategories',
      request,
      metadata,
      methodInfo_API_GetCategories);
};


/**
 * @param {!proto.pineapples.GetCategoriesReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Category>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getCategories =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetCategories',
      request,
      metadata,
      methodInfo_API_GetCategories);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetPurchasesReq,
 *   !proto.pineapples.Purchase>}
 */
const methodInfo_API_GetPurchases = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Purchase,
  /** @param {!proto.pineapples.GetPurchasesReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Purchase.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetPurchasesReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Purchase>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getPurchases =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetPurchases',
      request,
      metadata,
      methodInfo_API_GetPurchases);
};


/**
 * @param {!proto.pineapples.GetPurchasesReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Purchase>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getPurchases =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetPurchases',
      request,
      metadata,
      methodInfo_API_GetPurchases);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetPurchasesByClientIdReq,
 *   !proto.pineapples.Purchase>}
 */
const methodInfo_API_GetPurchasesByClientId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Purchase,
  /** @param {!proto.pineapples.GetPurchasesByClientIdReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Purchase.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetPurchasesByClientIdReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Purchase>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getPurchasesByClientId =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetPurchasesByClientId',
      request,
      metadata,
      methodInfo_API_GetPurchasesByClientId);
};


/**
 * @param {!proto.pineapples.GetPurchasesByClientIdReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Purchase>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getPurchasesByClientId =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetPurchasesByClientId',
      request,
      metadata,
      methodInfo_API_GetPurchasesByClientId);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddGoodInStoreReq,
 *   !proto.pineapples.Store>}
 */
const methodInfo_API_AddGoodInStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Store,
  /** @param {!proto.pineapples.AddGoodInStoreReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Store.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddGoodInStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Store)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Store>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addGoodInStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddGoodInStore',
      request,
      metadata,
      methodInfo_API_AddGoodInStore,
      callback);
};


/**
 * @param {!proto.pineapples.AddGoodInStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Store>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addGoodInStore =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addGoodInStore(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.DeleteGoodFromStoreReq,
 *   !proto.pineapples.Store>}
 */
const methodInfo_API_DeleteGoodFromStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Store,
  /** @param {!proto.pineapples.DeleteGoodFromStoreReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Store.deserializeBinary
);


/**
 * @param {!proto.pineapples.DeleteGoodFromStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Store)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Store>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.deleteGoodFromStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/DeleteGoodFromStore',
      request,
      metadata,
      methodInfo_API_DeleteGoodFromStore,
      callback);
};


/**
 * @param {!proto.pineapples.DeleteGoodFromStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Store>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.deleteGoodFromStore =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteGoodFromStore(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SetPercentInStoreReq,
 *   !proto.pineapples.Store>}
 */
const methodInfo_API_SetPercentInStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Store,
  /** @param {!proto.pineapples.SetPercentInStoreReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Store.deserializeBinary
);


/**
 * @param {!proto.pineapples.SetPercentInStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Store)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Store>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.setPercentInStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/SetPercentInStore',
      request,
      metadata,
      methodInfo_API_SetPercentInStore,
      callback);
};


/**
 * @param {!proto.pineapples.SetPercentInStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Store>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.setPercentInStore =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setPercentInStore(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddTourAgencyReq,
 *   !proto.pineapples.TourAgency>}
 */
const methodInfo_API_AddTourAgency = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.TourAgency,
  /** @param {!proto.pineapples.AddTourAgencyReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.TourAgency.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddTourAgencyReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.TourAgency)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.TourAgency>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addTourAgency =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddTourAgency',
      request,
      metadata,
      methodInfo_API_AddTourAgency,
      callback);
};


/**
 * @param {!proto.pineapples.AddTourAgencyReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.TourAgency>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addTourAgency =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addTourAgency(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateTourAgencyReq,
 *   !proto.pineapples.TourAgency>}
 */
const methodInfo_API_UpdateTourAgency = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.TourAgency,
  /** @param {!proto.pineapples.UpdateTourAgencyReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.TourAgency.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateTourAgencyReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.TourAgency)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.TourAgency>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateTourAgency =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateTourAgency',
      request,
      metadata,
      methodInfo_API_UpdateTourAgency,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateTourAgencyReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.TourAgency>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateTourAgency =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateTourAgency(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.DeleteTourAgencyReq,
 *   !proto.pineapples.Dummy>}
 */
const methodInfo_API_DeleteTourAgency = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Dummy,
  /** @param {!proto.pineapples.DeleteTourAgencyReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Dummy.deserializeBinary
);


/**
 * @param {!proto.pineapples.DeleteTourAgencyReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Dummy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Dummy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.deleteTourAgency =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/DeleteTourAgency',
      request,
      metadata,
      methodInfo_API_DeleteTourAgency,
      callback);
};


/**
 * @param {!proto.pineapples.DeleteTourAgencyReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Dummy>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.deleteTourAgency =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteTourAgency(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetTourAgenciesReq,
 *   !proto.pineapples.TourAgency>}
 */
const methodInfo_API_GetTourAgencies = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.TourAgency,
  /** @param {!proto.pineapples.GetTourAgenciesReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.TourAgency.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetTourAgenciesReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.TourAgency>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getTourAgencies =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetTourAgencies',
      request,
      metadata,
      methodInfo_API_GetTourAgencies);
};


/**
 * @param {!proto.pineapples.GetTourAgenciesReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.TourAgency>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getTourAgencies =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetTourAgencies',
      request,
      metadata,
      methodInfo_API_GetTourAgencies);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetTourAgencyReq,
 *   !proto.pineapples.TourAgency>}
 */
const methodInfo_API_GetTourAgency = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.TourAgency,
  /** @param {!proto.pineapples.GetTourAgencyReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.TourAgency.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetTourAgencyReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.TourAgency)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.TourAgency>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getTourAgency =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/GetTourAgency',
      request,
      metadata,
      methodInfo_API_GetTourAgency,
      callback);
};


/**
 * @param {!proto.pineapples.GetTourAgencyReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.TourAgency>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getTourAgency =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getTourAgency(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetPercentsByTourAgencyReq,
 *   !proto.pineapples.Percent>}
 */
const methodInfo_API_GetPercentsByTourAgency = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Percent,
  /** @param {!proto.pineapples.GetPercentsByTourAgencyReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Percent.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetPercentsByTourAgencyReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Percent>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getPercentsByTourAgency =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetPercentsByTourAgency',
      request,
      metadata,
      methodInfo_API_GetPercentsByTourAgency);
};


/**
 * @param {!proto.pineapples.GetPercentsByTourAgencyReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Percent>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getPercentsByTourAgency =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetPercentsByTourAgency',
      request,
      metadata,
      methodInfo_API_GetPercentsByTourAgency);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SetPercentInTourAgencyReq,
 *   !proto.pineapples.TourAgency>}
 */
const methodInfo_API_SetPercentInTourAgency = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.TourAgency,
  /** @param {!proto.pineapples.SetPercentInTourAgencyReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.TourAgency.deserializeBinary
);


/**
 * @param {!proto.pineapples.SetPercentInTourAgencyReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.TourAgency)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.TourAgency>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.setPercentInTourAgency =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/SetPercentInTourAgency',
      request,
      metadata,
      methodInfo_API_SetPercentInTourAgency,
      callback);
};


/**
 * @param {!proto.pineapples.SetPercentInTourAgencyReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.TourAgency>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.setPercentInTourAgency =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setPercentInTourAgency(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetTripsReq,
 *   !proto.pineapples.Trip>}
 */
const methodInfo_API_GetTrips = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Trip,
  /** @param {!proto.pineapples.GetTripsReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Trip.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetTripsReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Trip>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getTrips =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetTrips',
      request,
      metadata,
      methodInfo_API_GetTrips);
};


/**
 * @param {!proto.pineapples.GetTripsReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Trip>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getTrips =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetTrips',
      request,
      metadata,
      methodInfo_API_GetTrips);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddTripReq,
 *   !proto.pineapples.AddTripRep>}
 */
const methodInfo_API_AddTrip = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.AddTripRep,
  /** @param {!proto.pineapples.AddTripReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.AddTripRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.AddTripRep)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.AddTripRep>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addTrip =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddTrip',
      request,
      metadata,
      methodInfo_API_AddTrip,
      callback);
};


/**
 * @param {!proto.pineapples.AddTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.AddTripRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addTrip =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addTrip(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SetCompletedWithGoodsStatusInTripReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_SetCompletedWithGoodsStatusInTrip = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.SetCompletedWithGoodsStatusInTripReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.SetCompletedWithGoodsStatusInTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.setCompletedWithGoodsStatusInTrip =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/SetCompletedWithGoodsStatusInTrip',
      request,
      metadata,
      methodInfo_API_SetCompletedWithGoodsStatusInTrip,
      callback);
};


/**
 * @param {!proto.pineapples.SetCompletedWithGoodsStatusInTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.setCompletedWithGoodsStatusInTrip =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setCompletedWithGoodsStatusInTrip(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SetCompletedWithoutGoodsStatusInTripReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_SetCompletedWithoutGoodsStatusInTrip = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.SetCompletedWithoutGoodsStatusInTripReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.SetCompletedWithoutGoodsStatusInTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.setCompletedWithoutGoodsStatusInTrip =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/SetCompletedWithoutGoodsStatusInTrip',
      request,
      metadata,
      methodInfo_API_SetCompletedWithoutGoodsStatusInTrip,
      callback);
};


/**
 * @param {!proto.pineapples.SetCompletedWithoutGoodsStatusInTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.setCompletedWithoutGoodsStatusInTrip =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setCompletedWithoutGoodsStatusInTrip(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SetInProcessStatusInTripReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_SetInProcessStatusInTrip = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.SetInProcessStatusInTripReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.SetInProcessStatusInTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.setInProcessStatusInTrip =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/SetInProcessStatusInTrip',
      request,
      metadata,
      methodInfo_API_SetInProcessStatusInTrip,
      callback);
};


/**
 * @param {!proto.pineapples.SetInProcessStatusInTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.setInProcessStatusInTrip =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setInProcessStatusInTrip(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SetPlanStatusInTripReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_SetPlanStatusInTrip = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.SetPlanStatusInTripReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.SetPlanStatusInTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.setPlanStatusInTrip =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/SetPlanStatusInTrip',
      request,
      metadata,
      methodInfo_API_SetPlanStatusInTrip,
      callback);
};


/**
 * @param {!proto.pineapples.SetPlanStatusInTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.setPlanStatusInTrip =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setPlanStatusInTrip(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SetPlaceAndTimeInTripReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_SetPlaceAndTimeInTrip = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.SetPlaceAndTimeInTripReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.SetPlaceAndTimeInTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.setPlaceAndTimeInTrip =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/SetPlaceAndTimeInTrip',
      request,
      metadata,
      methodInfo_API_SetPlaceAndTimeInTrip,
      callback);
};


/**
 * @param {!proto.pineapples.SetPlaceAndTimeInTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.setPlaceAndTimeInTrip =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setPlaceAndTimeInTrip(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SetTripInStoreReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_SetTripInStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.SetTripInStoreReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.SetTripInStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.setTripInStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/SetTripInStore',
      request,
      metadata,
      methodInfo_API_SetTripInStore,
      callback);
};


/**
 * @param {!proto.pineapples.SetTripInStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.setTripInStore =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setTripInStore(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.DeleteTripInStoreReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_DeleteTripInStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.DeleteTripInStoreReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.DeleteTripInStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.deleteTripInStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/DeleteTripInStore',
      request,
      metadata,
      methodInfo_API_DeleteTripInStore,
      callback);
};


/**
 * @param {!proto.pineapples.DeleteTripInStoreReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.deleteTripInStore =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteTripInStore(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SetVisitObjectivesInTripReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_SetVisitObjectivesInTrip = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.SetVisitObjectivesInTripReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.SetVisitObjectivesInTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.setVisitObjectivesInTrip =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/SetVisitObjectivesInTrip',
      request,
      metadata,
      methodInfo_API_SetVisitObjectivesInTrip,
      callback);
};


/**
 * @param {!proto.pineapples.SetVisitObjectivesInTripReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.setVisitObjectivesInTrip =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setVisitObjectivesInTrip(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddVisitObjectiveReq,
 *   !proto.pineapples.AddVisitObjectiveRep>}
 */
const methodInfo_API_AddVisitObjective = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.AddVisitObjectiveRep,
  /** @param {!proto.pineapples.AddVisitObjectiveReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.AddVisitObjectiveRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddVisitObjectiveReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.AddVisitObjectiveRep)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.AddVisitObjectiveRep>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addVisitObjective =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddVisitObjective',
      request,
      metadata,
      methodInfo_API_AddVisitObjective,
      callback);
};


/**
 * @param {!proto.pineapples.AddVisitObjectiveReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.AddVisitObjectiveRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addVisitObjective =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addVisitObjective(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.DeleteVisitObjectiveReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_DeleteVisitObjective = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.DeleteVisitObjectiveReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.DeleteVisitObjectiveReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.deleteVisitObjective =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/DeleteVisitObjective',
      request,
      metadata,
      methodInfo_API_DeleteVisitObjective,
      callback);
};


/**
 * @param {!proto.pineapples.DeleteVisitObjectiveReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.deleteVisitObjective =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteVisitObjective(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SetCompletedStateInObjectiveReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_SetCompletedStateInObjective = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.SetCompletedStateInObjectiveReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.SetCompletedStateInObjectiveReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.setCompletedStateInObjective =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/SetCompletedStateInObjective',
      request,
      metadata,
      methodInfo_API_SetCompletedStateInObjective,
      callback);
};


/**
 * @param {!proto.pineapples.SetCompletedStateInObjectiveReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.setCompletedStateInObjective =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setCompletedStateInObjective(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SetCancelledStateInObjectiveReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_SetCancelledStateInObjective = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.SetCancelledStateInObjectiveReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.SetCancelledStateInObjectiveReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.setCancelledStateInObjective =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/SetCancelledStateInObjective',
      request,
      metadata,
      methodInfo_API_SetCancelledStateInObjective,
      callback);
};


/**
 * @param {!proto.pineapples.SetCancelledStateInObjectiveReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.setCancelledStateInObjective =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setCancelledStateInObjective(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetObjectivesReq,
 *   !proto.pineapples.VisitObjective>}
 */
const methodInfo_API_GetObjectives = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.VisitObjective,
  /** @param {!proto.pineapples.GetObjectivesReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.VisitObjective.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetObjectivesReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.VisitObjective>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getObjectives =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetObjectives',
      request,
      metadata,
      methodInfo_API_GetObjectives);
};


/**
 * @param {!proto.pineapples.GetObjectivesReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.VisitObjective>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getObjectives =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetObjectives',
      request,
      metadata,
      methodInfo_API_GetObjectives);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetVisitsByTourAgencyReq,
 *   !proto.pineapples.VisitRep>}
 */
const methodInfo_API_GetVisitsByTourAgency = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.VisitRep,
  /** @param {!proto.pineapples.GetVisitsByTourAgencyReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.VisitRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetVisitsByTourAgencyReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.VisitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getVisitsByTourAgency =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetVisitsByTourAgency',
      request,
      metadata,
      methodInfo_API_GetVisitsByTourAgency);
};


/**
 * @param {!proto.pineapples.GetVisitsByTourAgencyReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.VisitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getVisitsByTourAgency =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetVisitsByTourAgency',
      request,
      metadata,
      methodInfo_API_GetVisitsByTourAgency);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetVisitByIdReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_GetVisitById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.GetVisitByIdReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetVisitByIdReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getVisitById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/GetVisitById',
      request,
      metadata,
      methodInfo_API_GetVisitById,
      callback);
};


/**
 * @param {!proto.pineapples.GetVisitByIdReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getVisitById =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getVisitById(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.UpdateInfoInVisitReq,
 *   !proto.pineapples.Visit>}
 */
const methodInfo_API_UpdateInfoInVisit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Visit,
  /** @param {!proto.pineapples.UpdateInfoInVisitReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Visit.deserializeBinary
);


/**
 * @param {!proto.pineapples.UpdateInfoInVisitReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Visit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Visit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.updateInfoInVisit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/UpdateInfoInVisit',
      request,
      metadata,
      methodInfo_API_UpdateInfoInVisit,
      callback);
};


/**
 * @param {!proto.pineapples.UpdateInfoInVisitReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Visit>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.updateInfoInVisit =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateInfoInVisit(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetCompletenessOfInfoReq,
 *   !proto.pineapples.GetCompletenessOfInfoRep>}
 */
const methodInfo_API_GetCompletenessOfInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.GetCompletenessOfInfoRep,
  /** @param {!proto.pineapples.GetCompletenessOfInfoReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.GetCompletenessOfInfoRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetCompletenessOfInfoReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.GetCompletenessOfInfoRep)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetCompletenessOfInfoRep>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getCompletenessOfInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/GetCompletenessOfInfo',
      request,
      metadata,
      methodInfo_API_GetCompletenessOfInfo,
      callback);
};


/**
 * @param {!proto.pineapples.GetCompletenessOfInfoReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.GetCompletenessOfInfoRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getCompletenessOfInfo =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getCompletenessOfInfo(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetTotalProfitReq,
 *   !proto.pineapples.GetTotalProfitRep>}
 */
const methodInfo_API_GetTotalProfit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.GetTotalProfitRep,
  /** @param {!proto.pineapples.GetTotalProfitReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.GetTotalProfitRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetTotalProfitReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetTotalProfitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getTotalProfit =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetTotalProfit',
      request,
      metadata,
      methodInfo_API_GetTotalProfit);
};


/**
 * @param {!proto.pineapples.GetTotalProfitReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetTotalProfitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getTotalProfit =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetTotalProfit',
      request,
      metadata,
      methodInfo_API_GetTotalProfit);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetProfitByStoreReq,
 *   !proto.pineapples.GetProfitByStoreRep>}
 */
const methodInfo_API_GetProfitByStore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.GetProfitByStoreRep,
  /** @param {!proto.pineapples.GetProfitByStoreReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.GetProfitByStoreRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetProfitByStoreReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetProfitByStoreRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getProfitByStore =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetProfitByStore',
      request,
      metadata,
      methodInfo_API_GetProfitByStore);
};


/**
 * @param {!proto.pineapples.GetProfitByStoreReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetProfitByStoreRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getProfitByStore =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetProfitByStore',
      request,
      metadata,
      methodInfo_API_GetProfitByStore);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetAgencyProfitReq,
 *   !proto.pineapples.GetAgencyProfitRep>}
 */
const methodInfo_API_GetAgencyProfit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.GetAgencyProfitRep,
  /** @param {!proto.pineapples.GetAgencyProfitReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.GetAgencyProfitRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetAgencyProfitReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetAgencyProfitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getAgencyProfit =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetAgencyProfit',
      request,
      metadata,
      methodInfo_API_GetAgencyProfit);
};


/**
 * @param {!proto.pineapples.GetAgencyProfitReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetAgencyProfitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getAgencyProfit =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetAgencyProfit',
      request,
      metadata,
      methodInfo_API_GetAgencyProfit);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetEmployeeProfitReq,
 *   !proto.pineapples.GetEmployeeProfitRep>}
 */
const methodInfo_API_GetEmployeeProfit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.GetEmployeeProfitRep,
  /** @param {!proto.pineapples.GetEmployeeProfitReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.GetEmployeeProfitRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetEmployeeProfitReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetEmployeeProfitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getEmployeeProfit =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetEmployeeProfit',
      request,
      metadata,
      methodInfo_API_GetEmployeeProfit);
};


/**
 * @param {!proto.pineapples.GetEmployeeProfitReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetEmployeeProfitRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getEmployeeProfit =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetEmployeeProfit',
      request,
      metadata,
      methodInfo_API_GetEmployeeProfit);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetPayoutReq,
 *   !proto.pineapples.GetPayoutRep>}
 */
const methodInfo_API_GetPlannedPayout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.GetPayoutRep,
  /** @param {!proto.pineapples.GetPayoutReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.GetPayoutRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetPayoutReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetPayoutRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getPlannedPayout =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetPlannedPayout',
      request,
      metadata,
      methodInfo_API_GetPlannedPayout);
};


/**
 * @param {!proto.pineapples.GetPayoutReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetPayoutRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getPlannedPayout =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetPlannedPayout',
      request,
      metadata,
      methodInfo_API_GetPlannedPayout);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.GetPayoutReq,
 *   !proto.pineapples.GetPayoutRep>}
 */
const methodInfo_API_GetActualPayout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.GetPayoutRep,
  /** @param {!proto.pineapples.GetPayoutReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.GetPayoutRep.deserializeBinary
);


/**
 * @param {!proto.pineapples.GetPayoutReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetPayoutRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getActualPayout =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetActualPayout',
      request,
      metadata,
      methodInfo_API_GetActualPayout);
};


/**
 * @param {!proto.pineapples.GetPayoutReq} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.GetPayoutRep>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getActualPayout =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetActualPayout',
      request,
      metadata,
      methodInfo_API_GetActualPayout);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.SetPaidOffForEmployeeReq,
 *   !proto.pineapples.ActualPayout>}
 */
const methodInfo_API_SetPaidOffForEmployee = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.ActualPayout,
  /** @param {!proto.pineapples.SetPaidOffForEmployeeReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.ActualPayout.deserializeBinary
);


/**
 * @param {!proto.pineapples.SetPaidOffForEmployeeReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.ActualPayout)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.ActualPayout>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.setPaidOffForEmployee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/SetPaidOffForEmployee',
      request,
      metadata,
      methodInfo_API_SetPaidOffForEmployee,
      callback);
};


/**
 * @param {!proto.pineapples.SetPaidOffForEmployeeReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.ActualPayout>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.setPaidOffForEmployee =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setPaidOffForEmployee(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.Dummy,
 *   !proto.pineapples.ContactInfoType>}
 */
const methodInfo_API_GetContactInfoTypes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.ContactInfoType,
  /** @param {!proto.pineapples.Dummy} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.ContactInfoType.deserializeBinary
);


/**
 * @param {!proto.pineapples.Dummy} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.ContactInfoType>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.getContactInfoTypes =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pineapples.API/GetContactInfoTypes',
      request,
      metadata,
      methodInfo_API_GetContactInfoTypes);
};


/**
 * @param {!proto.pineapples.Dummy} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.ContactInfoType>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.getContactInfoTypes =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/pineapples.API/GetContactInfoTypes',
      request,
      metadata,
      methodInfo_API_GetContactInfoTypes);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.AddContactInfoTypeReq,
 *   !proto.pineapples.ContactInfoType>}
 */
const methodInfo_API_AddContactInfoType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.ContactInfoType,
  /** @param {!proto.pineapples.AddContactInfoTypeReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.ContactInfoType.deserializeBinary
);


/**
 * @param {!proto.pineapples.AddContactInfoTypeReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.ContactInfoType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.ContactInfoType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.addContactInfoType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/AddContactInfoType',
      request,
      metadata,
      methodInfo_API_AddContactInfoType,
      callback);
};


/**
 * @param {!proto.pineapples.AddContactInfoTypeReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.ContactInfoType>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.addContactInfoType =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addContactInfoType(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pineapples.DeleteContactInfoTypeReq,
 *   !proto.pineapples.Dummy>}
 */
const methodInfo_API_DeleteContactInfoType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pineapples.Dummy,
  /** @param {!proto.pineapples.DeleteContactInfoTypeReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pineapples.Dummy.deserializeBinary
);


/**
 * @param {!proto.pineapples.DeleteContactInfoTypeReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pineapples.Dummy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pineapples.Dummy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIClient.prototype.deleteContactInfoType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pineapples.API/DeleteContactInfoType',
      request,
      metadata,
      methodInfo_API_DeleteContactInfoType,
      callback);
};


/**
 * @param {!proto.pineapples.DeleteContactInfoTypeReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pineapples.Dummy>}
 *     The XHR Node Readable Stream
 */
proto.pineapples.APIPromiseClient.prototype.deleteContactInfoType =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteContactInfoType(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.pineapples;

