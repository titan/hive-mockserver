YAML2JSON = /usr/local/bin/yaml2json-include

QUOTATION_GROUPS_DEPS = plan-additional.yaml plan-item-additional1.yaml plan-item-additional2.yaml plan-item-additional3.yaml plan-item-additional4.yaml plan-item-main1.yaml plan-item-main2.yaml plan-items-additional.yaml plan-items-main.yaml plan-items-third.yaml plan-item-third1.yaml plan-item-third2.yaml plan-main.yaml plan-rule-main1.yaml plan-rule-main2.yaml plan-rule-main3.yaml plan-rule-main4.yaml plan-rules-additional.yaml plan-rules-main.yaml plan-third.yaml quotation-group-additional.yaml quotation-group-main.yaml quotation-groups.yaml quotation-group-third.yaml quotation-item-additional1.yaml quotation-item-additional2.yaml quotation-item-additional3.yaml quotation-item-additional4.yaml quotation-item-main1.yaml quotation-item-main2.yaml quotation-item-price-additional1.yaml quotation-item-price-additional2.yaml quotation-item-price-additional3.yaml quotation-item-price-additional4.yaml quotation-item-price-main1.yaml quotation-item-price-main2.yaml quotation-item-prices-additional1.yaml quotation-item-prices-additional2.yaml quotation-item-prices-additional3.yaml quotation-item-prices-additional4.yaml quotation-item-prices-main1.yaml quotation-item-prices-main2.yaml quotation-item-prices-third1.yaml quotation-item-prices-third2.yaml quotation-item-price-third1.yaml quotation-item-price-third2-1.yaml quotation-item-price-third2-2.yaml quotation-item-price-third2-3.yaml quotation-item-price-third2-4.yaml quotation-item-price-third2-5.yaml quotation-item-quota-additional1.yaml quotation-item-quota-additional3.yaml quotation-item-quota-additional4.yaml quotation-item-quota-main1.yaml quotation-item-quota-main2.yaml quotation-item-quotas-additional1.yaml quotation-item-quotas-additional2.yaml quotation-item-quotas-additional3.yaml quotation-item-quotas-additional4.yaml quotation-item-quotas-main1.yaml quotation-item-quotas-main2.yaml quotation-item-quotas-third1.yaml quotation-item-quotas-third2.yaml quotation-item-quota-third2-1.yaml quotation-item-quota-third2-2.yaml quotation-item-quota-third2-3.yaml quotation-item-quota-third2-4.yaml quotation-item-quota-third2-5.yaml quotation-items-additional.yaml quotation-items-main.yaml quotation-items-third.yaml quotation-item-third1.yaml quotation-item-third2.yaml

QUOTATION = ../data/quotation/getQuotation.json
QUOTATION_DEPS = get-quotation.yaml $(QUOTATION_GROUPS_DEPS) $(VEHICLE_DEPS)

PLANS = ../data/plan/getPlans.json
JOINED_PLANS_DEPS = plans.yaml

PLAN = ../data/plan/getPlan.json
PLAN_DEPS = plan-item-main1.yaml plan-item-main2.yaml plan-items-main.yaml plan-main.yaml plan-rule-main1.yaml plan-rule-main2.yaml plan-rule-main3.yaml plan-rule-main4.yaml plan-rules-main.yaml

VEHICLE = ../data/vehicle/getVehicle.json
VEHICLE_DEPS = drivers.yaml driver.yaml owner.yaml applicant.yaml vehicle-model1.yaml vehicle-model2.yaml vehicle-models.yaml vehicle-model.yaml vehicle.yaml

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

all: $(QUOTATION) $(PLANS) $(PLAN) $(GET_GROUP) $(PROFILE) $(ORDERS) $(PLAN_ORDER) $(DRIVER_ORDER) $(SALE_ORDER) $(GROUP_TRIGGER) $(GET_WALLET) $(GET_TRANSACTIONS) $(SIGN) $(GET_MUTUAL_AID) $(GET_MUTUAL_AIDS)

$(QUOTATION): $(QUOTATION_DEPS)
	$(YAML2JSON) get-quotation.yaml | aeson-pretty > $@

$(PLANS): $(PLANS_DEPS)
	$(YAML2JSON) plans.yaml | aeson-pretty > $@

$(PLAN): $(PLAN_DEPS)
	$(YAML2JSON) plan-main.yaml | aeson-pretty > $@

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
	rm $(QUOTATION)
	rm $(AVAILABLE_PLANS)
	rm $(JOINED_PLANS)
	rm $(PLAN)
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
