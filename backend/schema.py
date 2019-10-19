from graphene_sqlalchemy_filter import FilterableConnectionField
from database.services_model import ModelService
from database.base import db_session
import graphene
import schema_services

#Current endpoint http://127.0.0.1:5000/graphql
class Query(graphene.ObjectType):
	#This allows to query all services by query=query {serviceList{ edges{ node{ id passphrase service }}}
	node = graphene.relay.Node.Field()
	find_service = graphene.Field(lambda: graphene.List(schema_services.Services), service=graphene.String())

	#Query is in this form: query { findService(service: "FaceBook") { id passphrase service } }
	def resolve_find_service(self, info, service):
		service_name = db_session.query(ModelService).filter_by(service=service)		
		return service_name

	#This query allows you to resolve functions with any attributes in one statement using a filterable library
	#Simpiflies the amount of resolvers 
	#This query is in the form query=query{serviceList( input: { service: "Instagram", }) { service { id service passphrase } } }	
	serviceList = FilterableConnectionField(schema_services.Services, filters=schema_services.ServiceFilter())

class Mutation(graphene.ObjectType):
	createService = schema_services.CreateService.Field()
	updateService = schema_services.UpdateService.Field()
	removeService = schema_services.RemoveService.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
