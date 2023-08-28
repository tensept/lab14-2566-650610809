"use client";
import { Button, Container, Divider, Group, Pagination, Rating, Text, Textarea, Title } from "@mantine/core";
import { useState } from "react";

export default function FoodReviewPage() {
  //const [value, setValue] = useState(0);

  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">Your rating</Title>
      <Rating size="lg" />
      <Textarea 
        label = "Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      />
      <Button mt="xs" color="orange">Submit Review</Button>
      <Divider my="sm" />
      <Group position="center">
      <Title order={4}>Elon Musk</Title>
      <Rating size="sm" value={5} readOnly/>
      </Group> 
      <Text ta="center" c="dimmed">Best pizza in this world. I give you X score.</Text>
      <Divider my="sm" />
      <Group position="center">
      <Title order={4}>Mark Zuck</Title>
      <Rating size="sm" value={4} readOnly/>
      </Group> 
      <Text ta="center" c="dimmed">My favourite part is pepperoni</Text>
      <Pagination total={20} color="orange" position="center" mt="md"/>
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Waenkaew Phimsena 650610809
      </Text>
    </Container>
  );
}
