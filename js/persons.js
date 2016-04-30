list_male_first_names 		= new Array();
list_female_first_names 	= new Array();
list_last_names 			= new Array();

function TSpouce(first_name_index, age, img){
	var self = {};
	
	self.first_name_index 	= first_name_index;
	self.age 				= age;
	self.img 				= img;
	
	self.GetFirstName = function() { return list_female_first_names[self.first_name_index]; };
	return self;
}

function TPerson(first_name_index, last_name_index, age, spouce, img){
	var self = {};

	self.first_name_index	= first_name_index;
	self.last_name_index 	= last_name_index;
	self.img		= img;
	self.age		= age;
	self.spouce		= spouce;
	
	self.GetFirstName = function() { return list_male_first_names[self.first_name_index]; };
	self.GetLastName  = function() { return list_first_names[self.last_name_index]; };
	
	return self;
}

function randomPerson(){
	var age = getRandomInt(21, 67);
	if (getChance(25 + age))
		var spouce = TSpouce(getRandomInt(0, list_female_first_names.length - 1), age + getRandomInt(-10, 3), '');
	else
		var spouce = false;
		
	return TPerson(getRandomInt(0, list_male_first_names.length - 1), getRandomInt(0, list_last_names.length - 1), age, spouce, '');
}
