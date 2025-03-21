<script lang="ts">
import { defineComponent } from 'vue';

// Define the shape of the form data for TypeScript
interface FormData {
  name: string;
  email: string;
  age: number | null;
  gender: string;
  occupation: string;
  interests: string[];
  bio: string;
  subscribe: boolean;
}

export default defineComponent({
  name: 'App',
  data(): { form: FormData; jsonOutput: string } {
    return {
      form: {
        name: '',
        email: '',
        age: null,
        gender: '',
        occupation: '',
        interests: [],
        bio: '',
        subscribe: false,
      },
      jsonOutput: '',
    };
  },
  methods: {
    convertToJson() {
      const data = {
        name: this.form.name,
        email: this.form.email,
        age: this.form.age,
        gender: this.form.gender,
        occupation: this.form.occupation || 'Not specified',
        interests: this.form.interests.length ? this.form.interests : ['None selected'],
        bio: this.form.bio || 'Not provided',
        subscribe: this.form.subscribe,
      };
      this.jsonOutput = JSON.stringify(data, null, 2);
      console.log('Form Data:', this.jsonOutput); // Log to console
      this.downloadJson(); // Automatically trigger download
      this.resetForm(); // Optional: Reset form after submission
    },
    downloadJson() {
      const blob = new Blob([this.jsonOutput], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'student-questionnaire.json';
      link.click();
      URL.revokeObjectURL(url);
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        age: null,
        gender: '',
        occupation: '',
        interests: [],
        bio: '',
        subscribe: false,
      };
      this.jsonOutput = ''; // Clear jsonOutput
    },
  },
});
</script>

<template>
  <div class="container">
    <div class="form-box">
      <img src="/home/user/dmispa/src/assets/DMI_LOGO.png" alt="Logo" class="logo" />
      <h1 class="title">DMI STUDENT QUESTIONNAIRE</h1>

      <form @submit.prevent="convertToJson" class="form">
        <div class="form-group">
          <label for="name" class="label">Full Name</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            class="input"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email" class="label">Email Address</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            class="input"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="age" class="label">Age</label>
          <input
            v-model.number="form.age"
            type="number"
            id="age"
            min="1"
            max="150"
            class="input"
            placeholder="Enter your age"
            required
          />
        </div>
        <div class="form-group">
          <label class="label">Gender</label>
          <select v-model="form.gender" class="select" required>
            <option value="" disabled>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="prefer-not-to-say">Prefer Not to Say</option>
          </select>
        </div>
        <div class="form-group">
          <label for="occupation" class="label">Year</label>
          <input
            v-model="form.occupation"
            type="text"
            id="occupation"
            class="input"
            placeholder="Enter your current year"
          />
        </div>
        <div class="form-group">
          <label class="label">Interests</label>
          <div class="checkbox-group">
            <label class="checkbox-label">
              <input
                v-model="form.interests"
                type="checkbox"
                value="Sciences"
                class="checkbox"
              />
              <span class="checkbox-text">Sciences</span>
            </label>
            <label class="checkbox-label">
              <input
                v-model="form.interests"
                type="checkbox"
                value="education"
                class="checkbox"
              />
              <span class="checkbox-text">Education</span>
            </label>
            <label class="checkbox-label">
              <input
                v-model="form.interests"
                type="checkbox"
                value="arts"
                class="checkbox"
              />
              <span class="checkbox-text">Arts</span>
            </label>
            <label class="checkbox-label">
              <input
                v-model="form.interests"
                type="checkbox"
                value="business"
                class="checkbox"
              />
              <span class="checkbox-text">Business</span>
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="bio" class="label">Bio</label>
          <textarea
            v-model="form.bio"
            id="bio"
            class="textarea"
            placeholder="Tell us about yourself"
            rows="4"
          ></textarea>
        </div>
        <div class="form-group">
          <label class="checkbox-label">
            <input v-model="form.subscribe" type="checkbox" class="checkbox" />
            <span class="checkbox-text">Subscribe to newsletter</span>
          </label>
        </div>
        <button type="submit" class="button">Submit</button>
      </form>
    </div>
  </div>
</template>