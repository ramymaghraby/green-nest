"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var repository_1 = require("@loopback/repository");
var rest_1 = require("@loopback/rest");
var models_1 = require("../models");
var repositories_1 = require("../repositories");
var MainCategoryController = /** @class */ (function () {
    function MainCategoryController(mainCategoryRepository) {
        this.mainCategoryRepository = mainCategoryRepository;
    }
    MainCategoryController.prototype.create = function (mainCategory) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mainCategoryRepository.create(mainCategory)];
            });
        });
    };
    MainCategoryController.prototype.count = function (where) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mainCategoryRepository.count(where)];
            });
        });
    };
    MainCategoryController.prototype.find = function (filter) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                filter = { include: [{ relation: "categories" }] };
                console.log(filter);
                return [2 /*return*/, this.mainCategoryRepository.find(filter)];
            });
        });
    };
    MainCategoryController.prototype.updateAll = function (mainCategory, where) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mainCategoryRepository.updateAll(mainCategory, where)];
            });
        });
    };
    MainCategoryController.prototype.findById = function (id, filter) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mainCategoryRepository.findById(id, filter)];
            });
        });
    };
    MainCategoryController.prototype.updateById = function (id, mainCategory) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mainCategoryRepository.updateById(id, mainCategory)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MainCategoryController.prototype.replaceById = function (id, mainCategory) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mainCategoryRepository.replaceById(id, mainCategory)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MainCategoryController.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mainCategoryRepository.deleteById(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        rest_1.post('/main-categories', {
            responses: {
                '200': {
                    description: 'MainCategory model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.MainCategory) } }
                }
            }
        }),
        __param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.MainCategory, {
                        title: 'NewMainCategory',
                        exclude: ['id']
                    })
                }
            }
        }))
    ], MainCategoryController.prototype, "create");
    __decorate([
        rest_1.get('/main-categories/count', {
            responses: {
                '200': {
                    description: 'MainCategory model count',
                    content: { 'application/json': { schema: repository_1.CountSchema } }
                }
            }
        }),
        __param(0, rest_1.param.where(models_1.MainCategory))
    ], MainCategoryController.prototype, "count");
    __decorate([
        rest_1.get('/main-categories', {
            responses: {
                '200': {
                    description: 'Array of MainCategory model instances',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: rest_1.getModelSchemaRef(models_1.MainCategory, { includeRelations: true })
                            }
                        }
                    }
                }
            }
        }),
        __param(0, rest_1.param.filter(models_1.MainCategory))
    ], MainCategoryController.prototype, "find");
    __decorate([
        rest_1.patch('/main-categories', {
            responses: {
                '200': {
                    description: 'MainCategory PATCH success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } }
                }
            }
        }),
        __param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.MainCategory, { partial: true })
                }
            }
        })),
        __param(1, rest_1.param.where(models_1.MainCategory))
    ], MainCategoryController.prototype, "updateAll");
    __decorate([
        rest_1.get('/main-categories/{id}', {
            responses: {
                '200': {
                    description: 'MainCategory model instance',
                    content: {
                        'application/json': {
                            schema: rest_1.getModelSchemaRef(models_1.MainCategory, { includeRelations: true })
                        }
                    }
                }
            }
        }),
        __param(0, rest_1.param.path.number('id')),
        __param(1, rest_1.param.filter(models_1.MainCategory, { exclude: 'where' }))
    ], MainCategoryController.prototype, "findById");
    __decorate([
        rest_1.patch('/main-categories/{id}', {
            responses: {
                '204': {
                    description: 'MainCategory PATCH success'
                }
            }
        }),
        __param(0, rest_1.param.path.number('id')),
        __param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.MainCategory, { partial: true })
                }
            }
        }))
    ], MainCategoryController.prototype, "updateById");
    __decorate([
        rest_1.put('/main-categories/{id}', {
            responses: {
                '204': {
                    description: 'MainCategory PUT success'
                }
            }
        }),
        __param(0, rest_1.param.path.number('id')),
        __param(1, rest_1.requestBody())
    ], MainCategoryController.prototype, "replaceById");
    __decorate([
        rest_1.del('/main-categories/{id}', {
            responses: {
                '204': {
                    description: 'MainCategory DELETE success'
                }
            }
        }),
        __param(0, rest_1.param.path.number('id'))
    ], MainCategoryController.prototype, "deleteById");
    MainCategoryController = __decorate([
        __param(0, repository_1.repository(repositories_1.MainCategoryRepository))
    ], MainCategoryController);
    return MainCategoryController;
}());
exports.MainCategoryController = MainCategoryController;
