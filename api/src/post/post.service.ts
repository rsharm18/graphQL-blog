import { Injectable } from '@nestjs/common';
import { Post } from 'src/model/model';

@Injectable()
export class PostService {
  delete(arg0: { id: number; }) {

    
    const index = this.data.findIndex(data => data.id === arg0.id);

    console.log(`delete index ${index} --  arg0 ${JSON.stringify(arg0) }`);
    
    if (index > -1) {
      const post = { ...this.data[index] };

      this.data = this.data.filter(post => post.id !== arg0.id)
      
      return post;
    }
    return {};
  }
data:Post[] = [
    {
      "authorId": 1,
      "id": 1,
      "title": "adult Labrador retriever",
      "votes": 43
    },
    {
      "authorId": 1,
      "id": 2,
      "title": "ice caves in the wild landscape photo of ice near gray cliff",
      "votes": 31
    },
    {
      "authorId": 1,
      "id": 3,
      "title": "@adventure.yuki frozen grass short-coated black dog sitting on snow",
      "votes": 16
    },
    {
      "authorId": 1,
      "id": 4,
      "title": "Hiking with my dog in the woods. black labrador retriever on brown grass field during daytime",
      "votes": 7
    },
    {
      "authorId": 1,
      "id": 5,
      "title": "Two boys hug their dogs in a leaf pile in the fall. smiling boys with dogs",
      "votes": 28
    },
    {
      "authorId": 1,
      "id": 6,
      "title": "Bone salt and pepper schnauzer puppy",
      "votes": 18
    },
    {
      "authorId": 1,
      "id": 7,
      "title": "Sleeping dogs lie two dogs lying on black textile",
      "votes": 19
    },
    {
      "authorId": 1,
      "id": 8,
      "title": "Dog in a forest at sunset dog in forest with sun rays",
      "votes": 242
    },
    {
      "authorId": 1,
      "id": 9,
      "title": "black and white Husky",
      "votes": 79
    },
    {
      "authorId": 1,
      "id": 10,
      "title": "Milo durmiendo después de un largo día de jugar en el río brown short coated dog lying on white textile",
      "votes": 17
    },
    {
      "authorId": 1,
      "id": 11,
      "title": "Gratitude short-coated tan dog on seashore",
      "votes": 12
    },
    {
      "authorId": 1,
      "id": 12,
      "title": "@adventure.yuki peekaboo adult short-coated black dog selective focus photography",
      "votes": 43
    },
    {
      "authorId": 1,
      "id": 13,
      "title": "front view of black and white puppy sitting on brown sofa",
      "votes": 92
    },
    {
      "authorId": 1,
      "id": 14,
      "title": "Random man walking with his dogs man and dogs on the seashore",
      "votes": 15
    },
    {
      "authorId": 1,
      "id": 15,
      "title": "Majestic looking dog on a lake white and brown short coated dog on snow covered ground during daytime",
      "votes": 3
    },
    {
      "authorId": 1,
      "id": 16,
      "title": "two puppies next to each other",
      "votes": 27
    },
    {
      "authorId": 1,
      "id": 17,
      "title": "two white dogs",
      "votes": 54
    },
    {
      "authorId": 1,
      "id": 18,
      "title": "A picture of my golden doodle, Yogi Bear white dog",
      "votes": 20
    },
    {
      "authorId": 1,
      "id": 19,
      "title": "long-coated brown dog",
      "votes": 5
    },
    {
      "authorId": 1,
      "id": 20,
      "title": "A feral cat short-fur gray and orange cat on green grass during daytime",
      "votes": 40
    },
    {
      "authorId": 1,
      "id": 21,
      "title": "selective focus photography of brown dog lying on gray surface",
      "votes": 14
    },
    {
      "authorId": 1,
      "id": 22,
      "title": "Beautiful dog in most photographed place in Canada A white dog sitting on a rock formation near a large mountain pond.",
      "votes": 2225
    },
    {
      "authorId": 1,
      "id": 23,
      "title": "brown and white short coated puppy lying on grass lawn",
      "votes": 41
    },
    {
      "authorId": 1,
      "id": 24,
      "title": "white dog on ground",
      "votes": 77
    },
    {
      "authorId": 1,
      "id": 25,
      "title": "Dogs black and brown Yorkshire Terrier",
      "votes": 25
    },
    {
      "authorId": 1,
      "id": 26,
      "title": "Being a proud owner of a frenchie... That means lovely walks and true bonding.. I just love to capture the beauty of nature and my perfect \"batdog\" <3  shallow focus photo of short-coated black dog",
      "votes": 6
    },
    {
      "authorId": 1,
      "id": 27,
      "title": "person touching dog's head",
      "votes": 45
    },
    {
      "authorId": 1,
      "id": 28,
      "title": "My dog Cody looking super excited.  brown short coated dog with green eyes",
      "votes": 6
    },
    {
      "authorId": 1,
      "id": 29,
      "title": "white black and brown long coated small dog",
      "votes": 8
    },
    {
      "authorId": 1,
      "id": 30,
      "title": "Sun Bathing adult gold golden retriever lying on floor",
      "votes": 149
    },
    {
      "authorId": 1,
      "id": 31,
      "title": "close-up photo of white English Bulldog",
      "votes": 29
    },
    {
      "authorId": 1,
      "id": 32,
      "title": "Engagement photos at the north campus at University of Georgia smiling women with dog",
      "votes": 9
    },
    {
      "authorId": 1,
      "id": 33,
      "title": "yawning white and brown short coated puppy",
      "votes": 501
    },
    {
      "authorId": 1,
      "id": 34,
      "title": "Hypebeasts brown and white dog wearing pink and black polka dot dress",
      "votes": 16
    },
    {
      "authorId": 1,
      "id": 35,
      "title": "short-coated gray dog near green leafed plants",
      "votes": 462
    },
    {
      "authorId": 1,
      "id": 36,
      "title": "dog prawn laying on concrete outside during daytime",
      "votes": 21
    },
    {
      "authorId": 1,
      "id": 37,
      "title": "A Walk in the Beach two black and tan dog on beach",
      "votes": 35
    },
    {
      "authorId": 1,
      "id": 38,
      "title": "Alaskan Malamute black and white wolf",
      "votes": 22
    },
    {
      "authorId": 1,
      "id": 39,
      "title": "Two dogs playing on the grass with a plastic bottle. brown and black short coated dog on green grass field during daytime",
      "votes": 0
    },
    {
      "authorId": 1,
      "id": 40,
      "title": "This is Ruby. I heard somewhere that dogs get a substantial boost in seratonin when they look at their owners for long periods of time. brown dog",
      "votes": 76
    },
    {
      "authorId": 1,
      "id": 41,
      "title": "I took this photo during my trip in Swedish Lapland . An adventure on a dogsledge through the beautiful Swedish nature photo of dogs with leash",
      "votes": 64
    },
    {
      "authorId": 1,
      "id": 42,
      "title": "Cooling off in the fountain white and black short coated dog in water fountain during daytime",
      "votes": 2
    },
    {
      "authorId": 1,
      "id": 43,
      "title": "Millie, the Cocker Spaniel self-isolating during the Coronavirus outbreak. brown long coated small dog lying on white textile",
      "votes": 149
    },
    {
      "authorId": 1,
      "id": 44,
      "title": "adult long-coated white and black dog",
      "votes": 33
    },
    {
      "authorId": 1,
      "id": 45,
      "title": "Border Collie Pup 6 weeks old has one blue eye. Southland New Zealand shallow focus photo of long-coated black and white puppy",
      "votes": 13
    },
    {
      "authorId": 1,
      "id": 46,
      "title": "Can I have something to eat? close view of black and white dog",
      "votes": 61
    },
    {
      "authorId": 1,
      "id": 47,
      "title": "shallow focus photo of brown dog running on body of water",
      "votes": 82
    },
    {
      "authorId": 1,
      "id": 48,
      "title": "short-coated black dog",
      "votes": 42
    },
    {
      "authorId": 1,
      "id": 49,
      "title": "Its cold out there scenery of aurora",
      "votes": 746
    },
    {
      "authorId": 1,
      "id": 50,
      "title": "long-coated brown dog on white boat",
      "votes": 297
    }
  ]
  upvoteById(arg0: { id: number; }) {

    console.log(`vote  arg0 ${JSON.stringify(arg0)}`);

    const index = this.data.findIndex(post => {
      console.log(`post ${JSON.stringify(post )}`);
      
      return post?.id === arg0?.id
    })

    console.log(`vote index ${index} --  arg0 ${JSON.stringify(arg0)}`);
    
    if (index > -1) {
      const post = this.data[index]
      post.votes = post.votes + 1
      this.data[index] = { ...post }
      return post;
    }
    return {};
  }

  findAll(arg0: { authorId: number; }) {
    return this.data.filter(post=>post.authorId === arg0.authorId);
  }
}
