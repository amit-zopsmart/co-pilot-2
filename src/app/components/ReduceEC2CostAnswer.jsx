import React from "react";
import { Avatar } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";
import AccordionComponent from "../components/common/AccordionComponent";
import QueryGroupSection from "../components/FirstScreen/QueryGroupSection";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { QuestionSetData } from "../data/apiJson";
import { QuestionSet } from "@/constant";
import { useQuery } from "@/app/hooks/useQueryContext";

const ReduceEC2CostAnswer = ({ setStepper, stepper }) => {
  const [loading, setLoading] = useState(true);
  const { setCurrQuestionInd } = useQuery();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setStepper(3);
      setCurrQuestionInd((curr) => Math.max(curr + 1, 2));
    }, 1000);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      {loading ? (
        <QueryComponent queryTitle="Compiling Data..." />
      ) : (
        <AccordionComponent
          heading={
            <Stack direction="row" gap={2} sx={{ p: 2 }}>
              <Avatar
                alt="Virat Kohali"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQG_EP2SJNlqnVsXyGdirJekiVfQpCrqwY0e0jPVqPQ&s"
              />
              <Typography sx={{ pt: 1 }}>
                You can save <b>$2500 per month</b> overall EC2 costs. Click
                here to access a detailed report.
                <br />
                Here are top 2 saving areas:
              </Typography>
            </Stack>
          }
          queryTitle="Top 2 saving areas"
        >
          <Box>
            <Stack
              sx={{
                border: "2px solid #20a56b",
                borderRadius: "10px",
                p: 2,
                mb: 2,
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold", pb: 2 }}>
                Budget xyz-logs-1 (production account #12345)
              </Typography>
              <Typography variant="body2">
                This bucket has <b>1TB</b> of data, and it does not use any
                storage tiers. There is more than <b>500GB</b> of data that has
                not been accessed. You can save <b>$1000</b> by deleting that
                data or <b>$700</b> by moving them to low tier data.
              </Typography>
            </Stack>
            <Stack
              sx={{ border: "2px solid #20a56b", borderRadius: "10px", p: 2 }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold", pb: 2 }}>
                Budget abc-user-1 (production account #12345)
              </Typography>
              <Typography variant="body2">
                This bucket has abnormally high reads and writes costs of{" "}
                <b>$5000</b> per month, increasing by day. Consider reading
                smaller chunks of data or changing your storage that is more
                effective for reads and writes.{" "}
              </Typography>
            </Stack>
          </Box>
          <Stack direction="row" sx={{ mt: 2, color: "#7f7d7d" }}>
            <Typography variant="body2">You might also want to know</Typography>
            <Box
              sx={{
                flex: 1,
                borderTop: 1,
                borderColor: "divider",
                ml: 2,
                mr: 2,
                mt: "10px",
              }}
            />
            <KeyboardArrowUpIcon />
          </Stack>
          {stepper > 1 ? (
            <QueryGroupSection queryTitles={QuestionSetData[QuestionSet[2]]} />
          ) : null}
        </AccordionComponent>
      )}
    </Box>
  );
};

export default ReduceEC2CostAnswer;
