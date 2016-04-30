function TGame(){
		var self = {};
		
		// private declarations
		var started	= false;
		var events 	= {};

		// public declarations
		self.GetVersion = function () { return {Major: 0, Minor: 3}; };
		self.GetName 	= function () { return 'Mobsters'; };
		self.Frame		= 0;
		
		self.Screen = $('#gamescreen'); // for quick access

		self.World = TWorld();
		
		// private functions		
		function Update(){
			if (!started) return false;
			 
			self.Frame ++; 
			console.log(self.Frame);
			
			window.setTimeout(Update, 1000);
			return true;
		};	
		
		// public functions	
		self.AddEventListener = function(trigger_name, ontrigger){
			if (!events[trigger_name]){
				events[trigger_name] = {last_id: 0, list: new Array()};
			}
	
			var current = events[trigger_name]; 
			
			current.last_id ++;
			
			current.list.push({call: ontrigger, id: current.last_id});
			return {name: trigger_name, id: current.last_id};
		};
		
		self.CallEvent = function(trigger_name, data){
			var current = events[trigger_name];
			 
			if (current){
				for (var i = 0; i < current.list.length; i++)
					current.list[i].call(data);
				return true;
			}
			
			return false;
		};
		
		self.RemoveEventListener = function(trigger_data){
			var current = events[trigger_data.name];
			 
			if (current)
				for (var i = 0; i < current.list.length; i++)
					if (current.list[i].id == trigger_data.id){
						current.list.splice(i, 1);
						return true;	
					}
					
			return false;
		};
		
		self.Start = function(){
			if (!started) started = true; else return false;
			Update(); // Kick-Start the update loop
			
			return true;
		};

	return self;
}
