{
    "data": {
        "id": "1",
        "type": "full_user",
        "attributes": {
            "username": "soledad",
            "email": "leslie@gmail.com",
            "pets": [
                {
                    "id": 1,
                    "type": "pet",
                    "attributes": {
                        "user_id": 1,
                        "name": "Sugar",
                        "age": 4,
                        "pet_type": "dog",
                        "breed": "Pug",
                        "description": "This is a great dog!",
                        "gender": "Male",
                        "fixed": true,
                        "house_trained": true,
                        "photo_url_1": "https://thehappypuppysite.com/wp-content/uploads/2019/04/How-Long-Do-Pugs-Live-long.jpg",
                        "photo_url_2": "https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2020/04/pugs-coronavirus.jpg?quality=80&strip=all&ssl=1",
                        "photo_url_3": "https://www.purina.com.au/-/media/project/purina/main/breeds/dog/mobile/dog_pugs_mobile.jpg?h=300&la=en&w=375&hash=5BF9CFC4E6FC7347E6FDA383E42D8A52",
                        "good_with_kids": true,
                        "good_with_animals": true,
                        "created_at": "2021-05-25T20:03:14.860Z",
                        "updated_at": "2021-05-25T20:03:14.860Z"
                    }
                },
                {
                    "id": 2,
                    "type": "pet",
                    "attributes": {
                        "user_id": 1,
                        "name": "Diesel",
                        "age": 1,
                        "pet_type": "dog",
                        "breed": "Pomeranian",
                        "description": "This dog is so fluffy",
                        "gender": "Female",
                        "fixed": true,
                        "house_trained": true,
                        "photo_url_1": "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/09/12211850/curly_pom_hero.jpg",
                        "photo_url_2": "https://thehappypuppysite.com/wp-content/uploads/2019/09/Fluffy-Dogs-HP-long.jpg",
                        "photo_url_3": null,
                        "good_with_kids": true,
                        "good_with_animals": true,
                        "created_at": "2021-05-25T20:03:14.869Z",
                        "updated_at": "2021-05-25T20:03:14.869Z"
                    }
                },
                {
                    "id": 3,
                    "type": "pet",
                    "attributes": {
                        "user_id": 1,
                        "name": "Smokey",
                        "age": 6,
                        "pet_type": "cat",
                        "breed": "Ragdoll",
                        "description": "This kitty loves to sleep!",
                        "gender": "female",
                        "fixed": false,
                        "house_trained": false,
                        "photo_url_1": "https://i.pinimg.com/originals/f1/8f/9a/f18f9a971ce3201b2da52fc1bbc0f283.jpg",
                        "photo_url_2": "http://exoticpetinformation.weebly.com/uploads/2/4/3/1/24318708/2845483.jpg",
                        "photo_url_3": null,
                        "good_with_kids": true,
                        "good_with_animals": true,
                        "created_at": "2021-05-25T20:03:14.877Z",
                        "updated_at": "2021-05-25T20:03:14.877Z"
                    }
                }
            ],
            "favorites": [
                {
                    "id": 4,
                    "type": "pet",
                    "attributes": {
                        "user_id": 2,
                        "name": "Max",
                        "age": 2,
                        "pet_type": "dog",
                        "breed": "Tabby",
                        "description": "They are so snuggly",
                        "gender": "male",
                        "fixed": false,
                        "house_trained": false,
                        "photo_url_1": "https://www.pumpkin.care/blog/wp-content/uploads/2020/11/10-Best-Names-For-Tabby-Cats.jpg",
                        "photo_url_2": "https://www.thehappycatsite.com/wp-content/uploads/2017/10/30-Awesome-Tabby-Cat-Facts-HC-long.jpg",
                        "photo_url_3": "https://epicpetclub.com/wp-content/uploads/2020/08/image-of-a-fat-tabby-cat.jpg",
                        "good_with_kids": false,
                        "good_with_animals": true,
                        "created_at": "2021-05-25T20:03:14.884Z",
                        "updated_at": "2021-05-25T20:03:14.884Z"
                    }
                }
            ],
            "applications": [
                {
                    "id": 10,
                    "user_id": 1,
                    "pet_id": 2,
                    "status": "pending",
                    "description": "I'd be good because...",
                    "created_at": "2021-05-26T01:08:28.070Z",
                    "updated_at": "2021-05-26T01:08:28.070Z",
                    "pet_name": "Diesel"
                },
                {
                    "id": 1,
                    "user_id": 1,
                    "pet_id": 4,
                    "status": "denied",
                    "description": "I would be a great pet owner!",
                    "created_at": "2021-05-25T20:03:15.063Z",
                    "updated_at": "2021-05-25T20:07:55.819Z",
                    "pet_name": "Max"
                },
                {
                    "id": 7,
                    "user_id": 1,
                    "pet_id": 13,
                    "status": "pending",
                    "description": "I'd be good because...",
                    "created_at": "2021-05-26T01:02:45.912Z",
                    "updated_at": "2021-05-26T01:02:45.912Z",
                    "pet_name": "Max"
                },
                {
                    "id": 8,
                    "user_id": 1,
                    "pet_id": 3,
                    "status": "pending",
                    "description": "I'd be good because...",
                    "created_at": "2021-05-26T01:02:59.450Z",
                    "updated_at": "2021-05-26T01:02:59.450Z",
                    "pet_name": "Smokey"
                }
            ],
            "pet_applications": [
                {
                    "id": 4,
                    "user_id": 3,
                    "pet_id": 1,
                    "status": "pending",
                    "description": "I would love this dog so much!",
                    "created_at": "2021-05-25T20:03:15.111Z",
                    "updated_at": "2021-05-25T20:03:15.111Z",
                    "pet_name": "Sugar"
                },
                {
                    "id": 5,
                    "user_id": 4,
                    "pet_id": 1,
                    "status": "pending",
                    "description": "My kids would love to have this dog!",
                    "created_at": "2021-05-25T20:03:15.121Z",
                    "updated_at": "2021-05-25T20:03:15.121Z",
                    "pet_name": "Sugar"
                },
                {
                    "id": 10,
                    "user_id": 1,
                    "pet_id": 2,
                    "status": "pending",
                    "description": "I'd be good because...",
                    "created_at": "2021-05-26T01:08:28.070Z",
                    "updated_at": "2021-05-26T01:08:28.070Z",
                    "pet_name": "Diesel"
                },
                {
                    "id": 8,
                    "user_id": 1,
                    "pet_id": 3,
                    "status": "pending",
                    "description": "I'd be good because...",
                    "created_at": "2021-05-26T01:02:59.450Z",
                    "updated_at": "2021-05-26T01:02:59.450Z",
                    "pet_name": "Smokey"
                }
            ]
        }
    }
}
