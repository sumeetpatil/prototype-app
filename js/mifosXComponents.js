define(['underscore', 'mifosX'], function() {
  var components = {
    models: [
      'LoggedInUser',
      'roleMap'
    ],
    controllers: [
      'MainController',
      'LoginFormController',
      'UserController',
      'UserFormController',
      'UserSettingController',
      'RoleController',
      'ClientController',
      'ViewClientLoanDetailsController',
      'LoanProductController',
      'ChargeController',
      'ViewChargeController',
      'SavingProductController',
      'OfficesController',
      'ViewOfficeController',
      'CreateOfficeController',
      'ViewClientController',
      'CreateClientController',
      'TaskController',
      'CurrencyConfigController',
      'SearchController',
      'ViewLoanProductController',
      'UserListController',
      'CreateUserController',
      'ViewUserController',
      'EditUserController',
      'EmployeeController',
      'ViewEmployeeController',
      'EditEmployeeController',
      'CreateEmployeeController',
      'ManageFundsController',
      'AccFreqPostingController',
      'AccCoaController',
      'AccCreateGLAccountContoller',
      'AccViewGLAccountContoller',
      'AccEditGLAccountController'
    ],
    filters: [
      'StatusLookup'
    ],
    services: [
      'ResourceFactoryProvider',
      'HttpServiceProvider',
      'AuthenticationService',
      'SessionManager',
      'Paginator'
    ],
    directives: [
      'DataTablesDirective',
      'OverlayDirective',
      'DialogDirective'
    ]
  };

  require(_.reduce(_.keys(components), function(list, group) {
    return list.concat(_.map(components[group], function(name) { return group + "/" + name; }));
  }, [
    'routes',
    'initialTasks',
    'webstorage-configuration'
  ]));
});
