YAML2JSON = /usr/local/bin/yaml2json-include

QUOTATION_DEPS = quotation.yaml $(VEHICLE_DEPS) quotation-item-1.yaml quotation-item-2.yaml quotation-item-4.yaml quotation-item-512.yaml quotation-item-1024.yaml quotation-item-2048.yaml quotation-item-4096.yaml quotation-item-33554432.yaml quotation-item-67108864.yaml owner.yaml insured.yaml
MOBILE_QUOTATION_DEPS = mobile-quotation.yaml $(VEHICLE_DEPS)

GET_QUOTATION = ../data/quotation/getQuotation.json
GET_QUOTATION_DEPS = get-quotation.yaml $(QUOTATION_DEPS)

MOBILE_GET_QUOTATION = ../data/mobile/getQuotation.json
MOBILE_GET_QUOTATION_DEPS = mobile-get-quotation.yaml $(MOBILE_QUOTATION_DEPS)

MOBILE_GETLASTQUOTATIONS = ../data/mobile/getLastQuotations.json
MOBILE_GETLASTQUOTATIONS_DEPS = mobile-getLastQuotations.yaml $(QUOTATION_DEPS)

PLANS_DEPS = plans.yaml plan-1.yaml plan-2.yaml plan-4.yaml plan-512.yaml plan-1024.yaml plan-2048.yaml plan-4096.yaml plan-33554432.yaml plan-67108864.yaml

GET_PLANS = ../data/plan/getPlans.json
GET_PLANS_DEPS = get-plans.yaml $(PLANS_DEPS)

PLAN_GROUPS_DEPS = plan-groups.yaml

GET_PLAN_GROUPS = ../data/plan/getPlanGroups.json
GET_PLAN_GROUPS_DEPS = get-plan-groups.yaml $(PLAN_GROUPS_DEPS)

VEHICLE_DEPS = vehicle-model.yaml vehicle.yaml $(INSURED_DEPS)

GET_VEHICLE = ../data/vehicle/getVehicle.json
GET_VEHICLES_DEPS = get-vehicle.yaml $(VEHICLE_DEPS)

VEHICLES_DEPS = vehicles.yaml $(VEHICLE_DEPS)

GET_VEHICLES = ../data/vehicle/getVehicles.json
GET_VEHICLES_DEPS = get-vehicles.yaml $(VEHICLES_DEPS)

FETCH_VEHICLE_MODELS = ../data/vehicle/fetchVehicleModelsByVin.json
FETCH_VEHICLE_MODELS_DEPS = fetch-vehicle-models-by-vin.yaml $(VEHICLE_MODEL_DEPS)

VEHICLE_AND_MODELS_DEPS = zt-vehicle-and-models.yaml zt-vehicle.yaml zt-vehicle-models.yaml zt-vehicle-model1.yaml zt-vehicle-model2.yaml

FETCH_VEHICLE_AND_MODELS = ../data/vehicle/fetchVehicleAndModelsByLicense.json
FETCH_VEHICLE_AND_MODELS_DEPS = fetch-vehicle-and-models-by-license.yaml $(VEHICLE_AND_MODELS_DEPS)

USER_DEPS = user.yaml

GET_USER = ../data/profile/getUser.json
GET_USER_DEPS = get-user.yaml $(USER_DEPS)

GET_INSURED = ../data/profile/getInsured.json
GET_INSURED_DEPS = get-insured.yaml $(INSURED_DEPS)

GET_GROUP = ../data/group/getGroup.json
GET_GROUP_DEPS = get-group.yaml group.yaml group-items.yaml $(GROUP_ITEM) $(VEHICLE_DEPS) $(PROFILE_DEPS)

GROUP_ITEM_DEPS = group-item.yaml $(VEHICLE_DEPS)

GROUP_TRIGGER = ../data/group/group-trigger.json
GROUP_TRIGGER_DEPS = group-trigger.yaml $(GROUP_DEPS)

PLAN_ORDER_DEPS = plan-order.yaml plan-order-items.yaml drivers.yaml driver.yaml owner.yaml insured.yaml

GET_PLAN_ORDER = ../data/order/getPlanOrder.json
GET_PLAN_ORDER_DEPS = get-plan-order.yaml $(PLAN_ORDER_DEPS)

GET_PLAN_ORDERS = ../data/order/getPlanOrders.json
GET_PLAN_ORDERS_DEPS = get-plan-orders.yaml $(PLAN_ORDER_DEPS)

GET_WALLET = ../data/wallet/getWallet.json
GET_WALLET_DEPS = get-wallet.yaml wallet.yaml accounts.yaml $(VEHICLE_DEPS)

GET_TRANSACTIONS = ../data/wallet/getTransactions.json
GET_TRANSACTIONS_DEPS = get-transactions.yaml transactions.yaml

SIGN = ../data/oss/sign.json
SIGN_DEPS = oss-sign.yaml

MUTUAL_AID_DEPS = mutual-aid.yaml driver.yaml vehicle.yaml vehicle-model.yaml mutual-aid-recompense.yaml

GET_MUTUAL_AID = ../data/mutual-aid/getMutualAid.json
GET_MUTUAL_AID_DEPS = $(MUTUAL_AID_DEPS) get-mutual-aid.yaml

GET_MUTUAL_AIDS = ../data/mutual-aid/getMutualAids.json
GET_MUTUAL_AIDS_DEPS = $(MUTUAL_AID_DEPS) get-mutual-aids.yaml

all: $(GET_QUOTATION) $(MOBILE_GET_QUOTATION) $(MOBILE_GETLASTQUOTATIONS) $(GET_PLANS) $(GET_PLAN_GROUPS) $(GET_VEHICLE) $(GET_VEHICLES) $(FETCH_VEHICLE_MODELS) $(FETCH_VEHICLE_AND_MODELS) $(GET_GROUP) $(GET_USER) $(GET_INSURED) $(GET_PLAN_ORDER) $(GET_PLAN_ORDERS) $(GET_DRIVER_ORDERS) $(GROUP_TRIGGER) $(GET_WALLET) $(GET_TRANSACTIONS) $(SIGN) $(GET_MUTUAL_AID) $(GET_MUTUAL_AIDS)

$(GET_QUOTATION): $(GET_QUOTATION_DEPS)
	$(YAML2JSON) get-quotation.yaml | aeson-pretty > $@

$(MOBILE_GET_QUOTATION): $(MOBILE_GET_QUOTATION_DEPS)
	$(YAML2JSON) mobile-get-quotation.yaml | aeson-pretty > $@

$(MOBILE_GETLASTQUOTATIONS): $(MOBILE_GETLASTQUOTATIONS_DEPS)
	$(YAML2JSON) mobile-getLastQuotations.yaml | aeson-pretty > $@

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

$(GET_USER): $(GET_USER_DEPS)
	$(YAML2JSON) get-user.yaml | aeson-pretty > $@

$(GET_INSURED): $(GET_INSURED_DEPS)
	$(YAML2JSON) get-insured.yaml | aeson-pretty > $@

$(GET_PLAN_ORDER): $(GET_PLAN_ORDER_DEPS)
	$(YAML2JSON) get-plan-order.yaml | aeson-pretty > $@
	cp $@ ../data/order/getPlanOrderByQuotation.json
	cp $@ ../data/order/getPlanOrderByNo.json

$(GET_PLAN_ORDERS): $(GET_PLAN_ORDERS_DEPS)
	$(YAML2JSON) get-plan-orders.yaml | aeson-pretty > $@
	cp $@ ../data/order/getPlanOrdersByUser.json
	cp $@ ../data/order/getPlanOrdersByVehicle.json

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
	rm $(MOBILE_GET_QUOTATION)
	rm $(GET_PLANS)
	rm $(GET_PLAN_GROUPS)
	rm $(GET_VEHICLE)
	rm $(GET_VEHICLES)
	rm $(FETCH_VEHICLE_MODELS)
	rm $(FETCH_VEHICLE_AND_MODELS)
	rm $(GET_GROUP)
	rm $(GROUP_TRIGGER)
	rm $(GET_USER)
	rm $(GET_PLAN_ORDER)
	rm $(GET_PLAN_ORDERS)
	rm $(GET_WALLET)
	rm $(GET_TRANSACTIONS)
	rm $(SIGN)
	rm $(GET_MUTUAL_AID)
	rm $(GET_MUTUAL_AIDS)

.phoney: all clean
