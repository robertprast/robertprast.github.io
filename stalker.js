function StalkerExeample() 
{
	var threadIds = [];
	Process.enumerateThreads({
		onMatch: function (thread) 
		{
			threadIds.push(thread.id);
			console.log("Thread ID: " + thread.id.toString());
		},
		onComplete: function () 
		{
			threadIds.forEach(function (threadId) 
				{
					Stalker.follow(threadId, 
					{
						events: {call: true},
					
					onReceive: function (events)
					{
						console.log("onReceive called.");
					},
					onCallSummary: function (summary)
					{
						console.log("onCallSummary called.");
					}
				});
            });
		}
	});
}
StalkerExeample();