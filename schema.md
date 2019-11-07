# Accounts

What are all of the accounts that we have in our company?
Who is paying or free?
Where did we acquire them?
When did they sign up / cancel?

```
{
    "accounts": {
        "jackies_cleaning_4321": {
            "name": "Jackies Cleaning",
            "package": "Independent", //"Small Team", "Large Team"
            "acquisition": {
                "create_date": "11/5/19",
                "source": "Phone Call" // "Customer Call"
            },
            "retention": {
                "cancel_date": "2/2/25",
                "reason": "They hate us"
            },
            "type": "free",
            "users": [Users],
			"teams": [
				{
					"name": "Team 10",
					"users": [
						"jackie_fention_12345",
						"susy_smith_123124",
					]
				}
			]
        }
    }
}
```

# Users

What persmissions does this user have?
What is this person's name?
How do I contact this person?

```
{
    "users": {
        "jackie_fention_12345": {
            "name": "Jackie Fention",
            "contact": {
                "email": "jackie@jackiescleaning.com",
                "primary_phone": "(432) 456-1940",
                "secondary_phone": "(432) 456-1943",
            },
            "company": "jackies_cleaning_4321",
            "password": **********
            "admin": true,
        },
        "susy_smith_123124": {
            "name": "Susy Smith",
            "contact": {
                "email": "susy@jackiescleaning.com",
                "primary_phone": "(432) 863-1293
            },
            "company": "jackies_cleaning_4321",
            "admin": false,
            "password": **********
            "jobs": [
                "job_frankie_customer_123342354",
                "job_julia_customer_9829349",
                "job_julia_customer_98938973",
            ]
        }
}
```

# Customers

Who are our customers?
Are they a recurring customer?
Where did we get them?
What jobs have we done for them?
What jobs do we have scheduled for them?

```
{
    "customers": {
        "customer_id_1234423": {
		    “account_id”: "jackies_cleaning_4321",
            "name": "Frank Sinatra",
            "contact": {
                "email": "Frank@fankies.com",
                "phone": "(456) 456-1234"
            },
            "locations": [
                {
				“Name”: “Sherwood Spring”
				“Type”: [“Primary Residence”, “Secondary Residence”, “Rental”, “Vacation”, “Business”],
                    "primary": true,
                    "street": "1234 Heath",
                    "city": "Boise",
                    "state": "ID",
                    "zip": "87540"
                },
                {
				“Name”: “Sherwood Spring”
				“Type”: [“Primary Residence”, “Secondary Residence”, “Rental”, “Vacation”, “Business”],
                    "street": "1235 Heath",
                    "city": "Boise",
                    "state": "ID",
                    "zip": "87540"
                },
                {
				“Name”: “Sherwood Spring”
				“Type”: [“Primary Residence”, “Secondary Residence”, “Rental”, “Vacation”, “Business”],
                    "street": "1236 Heath",
                    "city": "Boise",
                    "state": "ID",
                    "zip": "87540"
                }

            ]
            "type": ["Recurring", "Special"],
            "category": ["single family home", "mobile home"],
            "acquisition": {
                "date": "11/12/19",
                "source": ["Ad", "Phone", "Customer Referral", "Staff Referral", "Other"]
            }
            "jobs": [
                "job_frankie_cleaning_123342354",
                "job_frankie_cleaning_12309874",
                "job_frankie_cleaning_123534234",
            ],
            "notes": [
                {
                    "_id": "note_id_1231243",
                    "timestamp": 12308970129834,
                    "note": "Information"
                },
                {
                    "_id": "note_id_12334987",
                    "timestamp": 12308970129999,
                    "note": "More Information"
                }
            ]
        },
        "customer_id_873892": {
            ...
        }
    }
}

```

# Jobs

Who was on this job?
Who was the client on the job?
When was the job performed?
When was the job scheduled?
Where is the job located?
Who worked this job?

```
{
    "jobs": {
        "_id": "job_frankie_cleaning_123342354",
        "customer": "customer_id_1234423",
        "details": {
            "scheduled_date": "10/31/19",
            "rescheduled_dates": [
                "11/4/19",
                "11/5/19",
                "11/19/19"
            ],
            "time": "9:00 A.M.",
			"start_time": 9434582903423,
			"end_time": 9874589032345,
        },
        "location": {
            "street": "1234 Heath",
            "city": "Boise",
            "state": "ID",
            "zip": "87540"
        },
        "techs": [
            {
                "user_id": "susy_smith_123124",
                "name": "Susy Smith",
                "start_time": 9434582903423,
                "end_time": 9874589032345
            },
            {
                "user_id": "susy_smith_123124",
                "name": "Helga Bergoli",
                "start_time": 1230909845,
                "end_time": 0983740298534
            }
        ],
        "type": ["Recurring", "Special"],
        "approved_checklist_url": "urltochecklist.com",
        "confirmed_checklist_url": "urltochekclistconfirmed.com",
        "pre_photos": [
            "url_to_photo_1.com",
            "url_to_photo_2.com",
            "url_to_photo_3.com",
        ]
        "post_photos: [
            "url_to_photo_4.com",
            "url_to_photo_5.com",
            "url_to_photo_6.com"
        ],
        "notes": "This place was a disaster and now it's beautiful"
    }
}
```
