function TRacket(){
	var self = {};
	
}

function TShop(name, guard_count, base_income, business_type, family, posX, posY, address, shop_owner, shop_img){
	var self = {};
	
	self.name 			= name;
	self.guard_count 	= guard_count;
	self.base_income	= base_income;
	self.business_type 	= business_type;
	self.family			= family;
	
	self.posX			= posX;
	self.posY			= posY;
	self.address		= address;
	self.owner			= shop_owner;
	self.image			= shop_img;
	
	self.district 		= false;		
		
	return self;
}

function TDistrict(name, logo, img, color, width, height, posX, posY){
	var self = {};
	
	self.Shops = new Array();
	
	self.AddShop = function(shop){
		if (!shop) return false;
		
		shop.district = self;
		self.Shops.push(shop);
		
		return true;
	};
	
	return self;
}

function TWorld(){
	var self = {};

	self.Districts = new Array(5);
	
	self.Districts[0] = TDistrict('North', 	'', '', 0xFF00FF, 360, 360, 360, 		0);
	self.Districts[1] = TDistrict('East', 	'', '', 0x0000FF, 360, 360, 360 * 2, 	360);
	self.Districts[2] = TDistrict('South', 	'', '', 0xFF0000, 360, 360, 360, 		360 * 2);
	self.Districts[3] = TDistrict('West', 	'', '', 0x00FFFF, 360, 360, 0, 			360);
	self.Districts[4] = TDistrict('Center', '', '', 0x00FF00, 360, 360, 360, 		360);
	
	function AddDistrictShops(district, shops){
		for (var i = 0; i < shops.length; i++ )
			self.Districts[district].AddShop(shops[i]);
	};
	
	AddDistrictShops(0, new Array(
	TShop('Emte', 	4, 200, 0, 0, 0, 0, 'Dorpsstraat 4', randomPerson(), ''),
	TShop('Slager', 2, 100, 0, 0, 0, 0, 'Dorpsstraat 2', randomPerson(), '')
	));

	return self;
}
