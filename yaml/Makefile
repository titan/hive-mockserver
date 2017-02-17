YAML2JSON = /usr/local/bin/yaml2json-include

QUOTATION_DEPS = quotation.yaml $(VEHICLE_DEPS) quotation-item-1.yaml quotation-item-2.yaml quotation-item-4.yaml quotation-item-8.yaml quotation-item-16.yaml quotation-item-32.yaml quotation-item-32.yaml

GET_QUOTATION = ../data/quotation/getQuotation.json
GET_QUOTATION_DEPS = get-quotation.yaml $(QUOTATION_DEPS)

PLANS_DEPS = plans.yaml plan-1.yaml plan-2.yaml plan-4.yaml plan-8.yaml plan-16.yaml plan-32.yaml plan-64.yaml

GET_PLANS = ../data/plan/getPlans.json
GET_PLANS_DEPS = get-plans.yaml $(PLANS_DEPS)

PLAN_GROUPS_DEPS = plan-groups.yaml

GET_PLAN_GROUPS = ../data/plan/getPlanGroups.json
GET_PLAN_GROUPS_DEPS = get-plan-groups.yaml $(PLAN_GROUPS_DEPS)

VEHICLE_DEPS = drivers.yaml driver.yaml owner.yaml applicant.yaml vehicle-model.yaml vehicle.yaml

GET_VEHICLE = ../data/vehicle/getVehicle.json
GET_VEHICLES_DEPS = get-vehicle.yaml $(VEHICLE_DEPS)

VEHICLES_DEPS = vehicles.yaml $(VEHICLE_DEPS)

GET_VEHICLES = ../data/vehicle/getVehicles.json
GET_VEHICLES_DEPS = get-vehicles.yaml $(VEHICLES_DEPS)

FETCH_VEHICLE_MODELS = ../data/vehicle/fetchVehicleModelByVin.json
FETCH_VEHICLE_MODELS_DEPS = vehicle-models.yaml vehicle-model1.yaml vehicle-model2.yaml

FETCH_VEHICLE_AND_MODELS = ../data/vehicle/fetchVehicleAndModelByLicense.json
FETCH_VEHICLE_AND_MODELS_DEPS = zt-vehicle-and-models.yaml zt-vehicle.yaml zt-vehicle-models.yaml zt-vehicle-model1.yaml zt-vehicle-model2.yaml

PROFILE = ../data/profile/getProfile.json
PROFILE_DEPS = profile.yaml

VEHICLE_DEPS = drivers.yaml driver.yaml owner.yaml applicant.yaml vehicle-model.yaml vehicle.yaml

GET_VEHICLE = ../data/vehicle/getVehicle.json
GET_VEHICLES_DEPS = get-vehicle.yaml $(VEHICLE_DEPS)

VEHICLES_DEPS = vehicles.yaml $(VEHICLE_DEPS)

GET_VEHICLES = ../data/vehicle/getVehicles.json
GET_VEHICLES_DEPS = get-vehicles.yaml $(VEHICLES_DEPS)


VEHICLE_MODELS_DEPS = vehicle-models.yaml vehicle-model1.yaml vehicle-model2.yaml

FETCH_VEHICLE_MODELS = ../data/vehicle/fetchVehicleModelsByVin.json
FETCH_VEHICLE_MODELS_DEPS = fetch-vehicle-models-by-vin.yaml $(VEHICLE_MODELS_DEPS)

VEHICLE_AND_MODELS_DEPS = zt-vehicle-and-models.yaml zt-vehicle.yaml zt-vehicle-models.yaml zt-vehicle-model1.yaml zt-vehicle-model2.yaml

FETCH_VEHICLE_AND_MODELS = ../data/vehicle/fetchVehicleAndModelsByLicense.json
FETCH_VEHICLE_AND_MODELS_DEPS = fetch-vehicle-and-models-by-license.yaml $(VEHICLE_AND_MODELS_DEPS)

PROFILE = ../data/profile/getProfile.json
PROFILE_DEPS = profile.yaml

GET_GROUP = ../data/group/getGroup.json
GET_GROUP_DEPS = get-group.yaml group.yaml group-items.yaml $(GROUP_ITEM) $(VEHICLE_DEPS) $(PROFILE_DEPS)

GROUP_ITEM_DEPS = group-item.yaml $(VEHICLE_DEPS)

GROUP_TRIGGER = ../data/group/group-trigger.json
GROUP_TRIGGER_DEPS = group-trigger.yaml $(GROUP_DEPS)

ORDER_ITEMS_PLAN_DEPS = order-items-plan.yaml order-item-plan1.yaml order-item-plan2.yaml order-item-plan3.yaml order-item-plan4.yaml order-item-plan5.yaml order-item-plan6.yaml
ORDER_ITEMS_SALE_DEPS = order-items-sale.yaml order-item-sale1.yaml order-item-sale2.yaml

PLAN_ORDER = ../data/order/getPlanOrder.json
PLAN_ORDER_DEPS = plan-order.yaml $(VEHICLE_DEPS) $(PLAN_DEPS) promotion.yaml $(ORDER_ITEMS_PLAN_DEPS)

DRIVER_ORDER = ../data/order/getDriverOrder.json
DRIVER_ORDER_DEPS = driver-order.yaml $(VEHICLE_DEPS)

SALE_ORDER = ../data/order/getSaleOrder.json
SALE_ORDER_DEPS = sale-order.yaml $(VEHICLE_DEPS) $(PLAN_DEPS) $(ORDER_ITEMS_PLAN_DEPS)

ORDERS = ../data/order/getOrders.json
ORDERS_DEPS = orders.yaml $(PLAN_ORDER_DEPS) $(DRIVER_ORDER_DEPS) $(THIRD_ORDER_DEPS)

GET_WALLET = ../data/wallet/getWallet.json
GET_WALLET_DEPS = get-wallet.yaml wallet.yaml accounts.yaml account.yaml $(VEHICLE_DEPS)

GET_TRANSACTIONS = ../data/wallet/getTransactions.json
GET_TRANSACTIONS_DEPS = get-transactions.yaml transactions.yaml transaction.yaml

SIGN = ../data/oss/sign.json
SIGN_DEPS = oss-sign.yaml

MUTUAL_AID_DEPS = mutual-aid.yaml driver.yaml vehicle.yaml mutual-aid-recompense.yaml

GET_MUTUAL_AID = ../data/mutual-aid/getMutualAid.json
GET_MUTUAL_AID_DEPS = $(MUTUAL_AID_DEPS) get-mutual-aid.yaml

GET_MUTUAL_AIDS = ../data/mutual-aid/getMutualAids.json
GET_MUTUAL_AIDS_DEPS = $(MUTUAL_AID_DEPS) get-mutual-aids.yaml

all: $(GET_QUOTATION) $(GET_PLANS) $(GET_PLAN_GROUPS) $(GET_VEHICLE) $(GET_VEHICLES) $(FETCH_VEHICLE_MODELS) $(FETCH_VEHICLE_AND_MODELS) $(GET_GROUP) $(PROFILE) $(ORDERS) $(PLAN_ORDER) $(DRIVER_ORDER) $(SALE_ORDER) $(GROUP_TRIGGER) $(GET_WALLET) $(GET_TRANSACTIONS) $(SIGN) $(GET_MUTUAL_AID) $(GET_MUTUAL_AIDS)

$(GET_QUOTATION): $(GET_QUOTATION_DEPS)
	$(YAML2JSON) get-quotation.yaml | aeson-pretty > $@

$(GET_PLANS): $(GET_PLANS_DEPS)
	$(YAML2JSON) get-plans.yaml | aeson-pretty > $@

$(GET_PLAN_GROUPS): $(GET_PLAN_GROUPS_DEPS)
	$(YAML2JSON) get-plan-groups.yaml | aeson-pretty > $@

$(GET_VEHICLE): $(VEHICLE_DEPS)
	$(YAML2JSON) get-vehicle.yaml | aeson-pretty > $@

$(GET_VEHICLES): $(GET_VEHICLES_DEPS)
	$(YAML2JSON) get-vehicles.yaml | aeson-pretty > $@

$(FETCH_VEHICLE_MODELS): $(FETCH_VEHICLE_MODELS_DEPS)
	$(YAML2JSON) fetch-vehicle-models-by-vin.yaml | aeson-pretty > $@

$(FETCH_VEHICLE_AND_MODELS): $(FETCH_VEHICLE_AND_MODELS_DEPS)
	$(YAML2JSON) fetch-vehicle-and-models-by-license.yaml | aeson-pretty > $@

$(GET_GROUP): $(GET_GROUP_DEPS)
	$(YAML2JSON) get-group.yaml | aeson-pretty > $@
	cp $@ ../data/group/getGroupOfCurrentUser.json

$(GROUP_TRIGGER): $(GROUP_TRIGGER_DEPS)
	$(YAML2JSON) group-trigger.yaml | aeson-pretty > $@

$(PROFILE): $(PROFILE_DEPS)
	$(YAML2JSON) profile.yaml | aeson-pretty > $@

$(ORDERS): $(ORDERS_DEPS)
	$(YAML2JSON) orders.yaml | aeson-pretty > $@

$(PLAN_ORDER): $(PLAN_ORDER_DEPS)
	$(YAML2JSON) plan-order.yaml | aeson-pretty > $@

$(DRIVER_ORDER): $(DRIVER_ORDER_DEPS)
	$(YAML2JSON) driver-order.yaml | aeson-pretty > $@

$(SALE_ORDER): $(SALE_ORDER_DEPS)
	$(YAML2JSON) sale-order.yaml | aeson-pretty > $@

$(GET_WALLET): $(GET_WALLET_DEPS)
	$(YAML2JSON) get-wallet.yaml | aeson-pretty > $@

$(GET_TRANSACTIONS): $(GET_TRANSACTIONS_DEPS)
	$(YAML2JSON) get-transactions.yaml | aeson-pretty > $@

$(SIGN): $(SIGN_DEPS)
	$(YAML2JSON) oss-sign.yaml | aeson-pretty > $@

$(GET_MUTUAL_AID): $(GET_MUTUAL_AID_DEPS)
	$(YAML2JSON) get-mutual-aid.yaml | aeson-pretty > $@

$(GET_MUTUAL_AIDS): $(GET_MUTUAL_AIDS_DEPS)
	$(YAML2JSON) get-mutual-aids.yaml | aeson-pretty > $@

clean:
	rm $(GET_QUOTATION)
	rm $(GET_PLANS)
	rm $(GET_PLAN_GROUPS)
	rm $(GET_VEHICLE)
	rm $(GET_VEHICLES)
	rm $(FETCH_VEHICLE_MODELS)
	rm $(FETCH_VEHICLE_AND_MODELS)
	rm $(GET_GROUP)
	rm $(GROUP_TRIGGER)
	rm $(PROFILE)
	rm $(PLAN_ORDER)
	rm $(DRIVER_ORDER)
	rm $(SALE_ORDER)
	rm $(ORDERS)
	rm $(GET_WALLET)
	rm $(GET_TRANSACTIONS)
	rm $(SIGN)
	rm $(GET_MUTUAL_AID)
	rm $(GET_MUTUAL_AIDS)

.phoney: all clean
