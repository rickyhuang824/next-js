import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

const Events = () => {
    const events = getAllEvents();
    const router = useRouter();
    const findEventsHandler = (year, month) => {
        router.push(`/events/${year}/${month}`);
    };
    return (
        <>
            <EventSearch onSearch={findEventsHandler} />
            <EventList events={events} />;
        </>
    );
};

export default Events;